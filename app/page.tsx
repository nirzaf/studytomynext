import { Metadata } from "next";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import WhyUs from "@/components/WhyUs";
import DoubtSection from "@/components/DoubtSection";
import ExamBoards from "@/components/ExamBoards";
import GroupDiscount from "@/components/GroupDiscount";
import Testimonials from "@/components/Testimonials";
import ImageGallery from "@/components/ImageGallery";
import Achievement from "@/components/Achievement";
import WhatsAppButton from "@/components/Common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Studytomy - Expert IGCSE & IB Tutoring Worldwide",
  description: "Transform Your Learning Journey with Expert Tutors Worldwide. Personalized 1-on-1 Learning tailored to your academic goals.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Subjects />
      <WhyUs />
      <DoubtSection />
      <ExamBoards />
      <GroupDiscount />
      <Testimonials />
      <ImageGallery />
      <Achievement />
      <WhatsAppButton />
    </main>
  );
}
