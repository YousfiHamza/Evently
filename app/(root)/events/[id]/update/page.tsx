import { auth } from '@clerk/nextjs';

import { EventForm } from '@/components/modules/forms/event';

export default function CreateEvent() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
      <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      <EventForm userId={userId} type="update" />
    </section>
  );
}
