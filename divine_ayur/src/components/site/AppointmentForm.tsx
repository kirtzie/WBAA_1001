import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarDays, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { clinic, timeSlots, treatmentOptions, whatsappHref } from "@/config/site";

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(120).optional().or(z.literal("")),
  age: z.string().trim().max(3).optional().or(z.literal("")),
  gender: z.string().optional().or(z.literal("")),
  city: z.string().trim().max(60).optional().or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  date: z
    .string()
    .min(1, "Please choose a preferred date")
    .refine((value) => new Date(value) >= today, "Appointment date cannot be in the past"),
  slot: z.string().min(1, "Please choose a time slot"),
  patientType: z.string().min(1, "Please select patient type"),
  problem: z.string().trim().max(800).optional().or(z.literal("")),
  contactMethod: z.string().min(1, "Please select a contact method"),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
});

type FormValues = z.infer<typeof schema>;

/**
 * Appointment form. No backend today: a validated submission opens WhatsApp with
 * a URL-encoded, pre-filled message. Swap `onSubmit` later for an API call.
 */
export function AppointmentForm({
  compact = false,
  defaultTreatment = "",
}: {
  compact?: boolean;
  defaultTreatment?: string;
}) {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      age: "",
      gender: "",
      city: "Rohtak",
      treatment: defaultTreatment,
      date: "",
      slot: "",
      patientType: "",
      problem: "",
      contactMethod: "",
      consent: false as unknown as true,
    },
  });

  function onSubmit(values: FormValues) {
    const message = [
      `Hello ${clinic.name},`,
      "",
      "I would like to book an appointment.",
      "",
      `Patient Name: ${values.fullName}`,
      `Mobile: ${values.mobile}`,
      `Email: ${values.email || "-"}`,
      `Age: ${values.age || "-"}`,
      `Gender: ${values.gender || "-"}`,
      `City: ${values.city || "-"}`,
      `Treatment: ${values.treatment}`,
      `Preferred Appointment Date: ${values.date}`,
      `Preferred Time: ${values.slot}`,
      `Patient Type: ${values.patientType}`,
      `Problem / Symptoms: ${values.problem || "-"}`,
      `Preferred Contact Method: ${values.contactMethod}`,
      "",
      "Thank you.",
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener");
    toast.success("Opening WhatsApp with your appointment details…");
  }

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
        aria-label="Appointment booking form"
      >
        <div className={compact ? "grid gap-5 sm:grid-cols-2" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Sunita Malik" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number *</FormLabel>
                <FormControl>
                  <Input placeholder="98120 77194" inputMode="tel" autoComplete="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="34" inputMode="numeric" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["Male", "Female", "Other"].map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Rohtak" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="treatment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Treatment Required *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-72">
                    {treatmentOptions.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date *</FormLabel>
                <FormControl>
                  <Input type="date" min={minDate} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time Slot *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select slot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="patientType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Patient Type *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["New Patient", "Existing Patient"].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Contact Method *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value ?? ""}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["WhatsApp", "Phone Call", "Email"].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="problem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Problem</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your symptoms, how long you have had them, and any treatment taken so far."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                  aria-label="Consent"
                />
              </FormControl>
              <div className="space-y-1">
                <FormLabel className="font-normal">
                  I consent to being contacted by the clinic regarding this appointment. *
                </FormLabel>
                <FormDescription className="text-xs">
                  Your details are sent directly to the clinic on WhatsApp and are never shared.
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" className="rounded-full">
            <Send className="size-4" aria-hidden />
            Send on WhatsApp
          </Button>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden />
            We confirm every appointment within clinic hours.
          </p>
        </div>
      </form>
    </Form>
  );
}
