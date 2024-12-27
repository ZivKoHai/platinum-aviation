import { Hero } from "../components/Hero";

export default function TermsConditions() {
  return (
    <>
      <Hero
        title="Terms & Conditions"
        description="Terms & Conditions for Ben Gurion Airport VIP Services"
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg">
          <h2 className="text-2xl font-bold mb-6">
            Before You Book Your Service, Please Read Our Policy:
          </h2>

          <p className="mb-8">
            At Platinum Aviation, we understand that plans can change
            unexpectedly. To accommodate this, we&apos;ve created a flexible
            cancellation policy that balances the needs of our customers with
            those of our VIP staff and drivers.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-3">
                Cancellation Policy
              </h3>
              <p>
                You can cancel your service without any fees (including
                ride-related expenses) if you cancel at least 48 hours before
                your arrival or departure from Israel. If your credit card has
                been charged, your account will be automatically refunded within
                a few business days. Cancellations made within 48 hours of the
                service are non-refundable.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Terms and Conditions
              </h3>
              <p>
                By confirming and signing the service order we send, you agree
                to all terms listed in that document. This includes meeting
                times at the airport and providing a valid passport and credit
                card. Failure to adhere to the agreed-upon time will result in
                the forfeiture of the service, with no responsibility on the
                part of our company.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">No-Show Policy</h3>
              <p>
                If passengers do not arrive at the agreed meeting time, our
                company will not be responsible for providing the service, and
                the full cost of the service will be charged.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Agreement Confirmation
              </h3>
              <p>
                Each signature on the order signifies a binding agreement for
                our services. The only exception is if the order is canceled
                more than 48 hours in advance. Once within the 48-hour window,
                cancellations will not be honored, and the service will be
                charged in full.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Third-Party Bookings
              </h3>
              <p>
                If a third party books a service on behalf of the customer and
                provides the recipient&apos;s passport and credit card, this
                constitutes an agreement. The service cannot be canceled within
                48 hours.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Electronic Confirmations
              </h3>
              <p>
                If a customer cannot physically sign the service order, a
                confirmation via WhatsApp or email, along with the provision of
                a passport and credit card, will be accepted as formal approval
                of the service. This is binding, and no future claims for
                non-provision of service will be entertained.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Service Quality Complaints and Refunds
              </h3>
              <p>
                While we strive to provide the highest quality service,
                individual perceptions of quality can vary. We encourage open
                communication and are always willing to receive feedback.
                However, refunds based solely on subjective service quality
                concerns may not be eligible for consideration. Any surprises or
                additional services, such as birthday gifts, must be clearly
                communicated to the client beforehand, and refunds will not be
                provided for such cases.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Passport Control Issues
              </h3>
              <p>
                In cases where customers are unable to leave the country due to
                passport control issues, refunds may not be granted. Passport
                control processes are outside our control, and it is the
                customer&apos;s responsibility to ensure all travel
                documentation, such as passports and visas, is valid.
                Non-refundable services, including transportation and
                accommodation, are subject to the terms and conditions outlined
                during booking.
              </p>
            </section>

            <section className="border-t pt-8">
              <p className="italic">
                At Platinum Aviation, our aim is to offer an exceptional
                experience. If you have any questions or concerns, please reach
                out to our customer support team. We&apos;re here to help ensure
                a smooth and enjoyable journey.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
