import { Form } from "./ui/Form";

export const Contact = () => {
  return (
    <section className="wDyn relative min-h-[500px] mt-20 flex flex-col gap-10 sm:flex-row justify-between items-center py-10">
      <div className="basis-1/2 flex flex-col gap-4 justify-center z-10">
        <h2 className="text-5xl font-medium text-left text-textColor font-serif">
          Contact Us
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-textColor">
            For inquiries, bookings, or assistance, leave us a message through
            the contact form, and we’ll respond as quickly as possible. Our team
            is available 24/7 to provide you with the highest level of service.
          </p>
          <p className="text-textColor">
            Contact us today to secure your VIP experience at Ben Gurion Airport
            and discover how our services make your journey seamless,
            comfortable, and stress-free.
          </p>
        </div>
      </div>
      <div className="basis-1/2">
        <Form />
        <div className="mt-4 text-sm text-muted-foreground text-center">
          *this is for ben gurion airport , for any other airport please send us
          a mesaage
        </div>
      </div>
    </section>
  );
};
