"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Fish, Headphones, Leaf, Map, Sparkles, Kayak, Sailboat, Lotus, Bird } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Activities",          id: "#activities"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="The Lagoon"
    />
  </div>

  <div id="home" data-section="home">
      <HeroOverlayTestimonial
      title="Discover The Lagoon's Serenity"
      description="Immerse yourself in breathtaking natural beauty and tranquil experiences that rejuvenate mind, body, and soul."
      testimonials={[
        {
          name: "Sophia R.",          handle: "@sophia_travels",          testimonial: "An unparalleled escape! The Lagoon truly is a hidden gem. Every moment felt like a dream.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-summer-hat-walking-city_231208-4536.jpg"},
        {
          name: "Mark D.",          handle: "@mark_adventure",          testimonial: "The perfect blend of adventure and relaxation. I can't wait to return to this paradise.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-close-up-street_1321-25.jpg"},
        {
          name: "Elena P.",          handle: "@elena_explorer",          testimonial: "The tranquil waters and lush landscapes were exactly what I needed. Pure bliss!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-walking-through-foliage_23-2148357663.jpg"},
        {
          name: "James K.",          handle: "@james_escapes",          testimonial: "From sunrise yoga to sunset cruises, every detail was perfect. A truly memorable experience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-grey-shirt-looking-up-thinking-positive-smiling-broadly_141793-55034.jpg"},
        {
          name: "Olivia M.",          handle: "@olivia_calm",          testimonial: "I found true peace here. The ambiance is incredibly soothing, and the staff are wonderful.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-tourist-with-his-backpack-pink-wall-color-emotions-tourist_140725-122622.jpg"},
      ]}
      buttons={[
        {
          text: "Explore Your Escape",          href: "#activities"},
        {
          text: "Plan Your Visit",          href: "#contact"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/joyful-business-woman-with-coffee-cup_23-2148095746.jpg",          alt: "Sophia R."},
        {
          src: "http://img.b2bpic.net/free-photo/man-black-wooden-jetty-maldives_505751-5527.jpg",          alt: "Mark D."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-smiling-blond-teenager-model-without-makeup-summer-hipster-white-dress-posing-street-background-touching-her-face_158538-12845.jpg",          alt: "Elena P."},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-bearded-man-drinking-coffee_171337-12821.jpg",          alt: "James K."},
        {
          src: "http://img.b2bpic.net/free-photo/happy-handsome-man-posing_23-2148911846.jpg",          alt: "Liam S."},
      ]}
      avatarText="Join over 1000 happy visitors"
      imageSrc="http://img.b2bpic.net/free-photo/nice-sunset-scene-beach_1048-5304.jpg"
      imageAlt="Aerial view of a serene blue-green lagoon"
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="Our Story"
      title="Where Tranquility Meets Untamed Beauty"
      buttons={[
        {
          text: "Learn More About Us",          href: "#"},
      ]}
    />
  </div>

  <div id="activities" data-section="activities">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Water Adventures",          description: "Dive into the crystal-clear waters with exhilarating activities. Explore vibrant marine life and hidden coves.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/long-shot-man-holding-surfboard_23-2148926823.jpg",            imageAlt: "Kayaking in a clear lagoon"},
          items: [
            {
              icon: Kayak,
              text: "Guided Kayak Tours"},
            {
              icon: Fish,
              text: "Snorkeling & Diving"},
            {
              icon: Sailboat,
              text: "Paddleboarding Lessons"},
          ],
          reverse: false,
        },
        {
          title: "Wellness & Serenity",          description: "Rejuvenate your mind, body, and soul amidst the tranquil beauty of The Lagoon. Find your inner peace.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relax-smile-leisure-around-outdoor-swimming-pool-nearly-sea_74190-14048.jpg",            imageAlt: "Woman practicing yoga on a beach at sunset"},
          items: [
            {
              icon: Lotus,
              text: "Beachside Yoga"},
            {
              icon: Sparkles,
              text: "Spa & Massage Therapy"},
            {
              icon: Headphones,
              text: "Guided Meditation"},
          ],
          reverse: true,
        },
        {
          title: "Nature Exploration",          description: "Discover the lush landscapes and hidden wonders surrounding The Lagoon. Connect with untouched nature.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-rocky-beach-sunset_181624-29138.jpg",            imageAlt: "Tropical forest trail"},
          items: [
            {
              icon: Leaf,
              text: "Guided Nature Walks"},
            {
              icon: Bird,
              text: "Wildlife Spotting"},
            {
              icon: Map,
              text: "Island Excursions"},
          ],
          reverse: false,
        },
      ]}
      title="Your Gateway to Unforgettable Moments"
      description="From invigorating water sports to serene meditation spots, The Lagoon offers a curated collection of activities designed to connect you with nature and yourself. Craft your perfect itinerary for relaxation, adventure, or discovery."
      tag="Experiences"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "g1",          name: "Azure Waters",          price: "Explore",          imageSrc: "http://img.b2bpic.net/free-photo/sea-vacations-green-water-waves_1122-2274.jpg",          imageAlt: "Aerial view of clear azure lagoon waters"},
        {
          id: "g2",          name: "Vibrant Reefs",          price: "Discover",          imageSrc: "http://img.b2bpic.net/free-photo/vivid-colours-plants-natural-environment_23-2151357910.jpg",          imageAlt: "Underwater view of a colorful coral reef"},
        {
          id: "g3",          name: "Overwater Retreat",          price: "Indulge",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-relax-smile-leisure-vacation-around-swimming-pool-resort-hotel_74190-14519.jpg",          imageAlt: "Luxury overwater bungalows at sunset"},
        {
          id: "g4",          name: "Golden Hour",          price: "Experience",          imageSrc: "http://img.b2bpic.net/free-photo/landscape-with-sea-sunset-beach_93675-128300.jpg",          imageAlt: "Sunset over the tranquil lagoon"},
        {
          id: "g5",          name: "Lush Greenery",          price: "Connect",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-green-plants-growing-forest_181624-28505.jpg",          imageAlt: "Dense tropical jungle foliage"},
        {
          id: "g6",          name: "Secluded Sands",          price: "Relax",          imageAlt: "White sand beach with palm trees",          imageSrc: "http://img.b2bpic.net/free-photo/nice-sunset-scene-beach_1048-5304.jpg"},
      ]}
      title="Visual Journey Through Paradise"
      description="Capturing the captivating moments, vibrant hues, and serene vistas that define The Lagoon. Each image tells a story of unparalleled natural splendor, inviting you to dream of your next escape."
      tag="Gallery"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          role: "Travel Blogger",          company: "Global Explorers",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149215793.jpg"},
        {
          id: "t2",          name: "Michael C.",          role: "CEO",          company: "Zen Corp",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-guy-looking-far-away-near-water_23-2148021703.jpg"},
        {
          id: "t3",          name: "Emily R.",          role: "Architect",          company: "Design Haven",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/tattooed-caucasian-woman-denim-shorts-green-trendy-crop-top-beach_343596-227.jpg"},
        {
          id: "t4",          name: "David L.",          role: "Photographer",          company: "Wild Lens Studio",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-people-drinking-kombucha_52683-122107.jpg"},
        {
          id: "t5",          name: "Jessica M.",          role: "Wellness Coach",          company: "Mindful Journeys",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-attractive-female-sitting-rock-formation-enjoying-beautiful-day_181624-7691.jpg"},
      ]}
      kpiItems={[
        {
          value: "5 Stars",          label: "Average Rating"},
        {
          value: "100%",          label: "Guest Satisfaction"},
        {
          value: "Top 10",          label: "Eco-Friendly Resort"},
      ]}
      title="Voices of Serenity"
      description="Hear from those who have found their escape at The Lagoon. Their words reflect the deep peace, joy, and unforgettable memories experienced in our unique sanctuary."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Luxury Travel Magazine",        "Eco Resorts International",        "Adventure Seekers Guild",        "Wellness Retreats Global",        "Nature Conservancy Partners",        "Marine Life Institute",        "Coastal Living Journal"]}
      title="Trusted Partners in Paradise"
      description="Collaborating with renowned names in luxury travel, eco-tourism, and wellness to bring you the finest experiences and ensure every moment at The Lagoon is exceptional."
      speed={40}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What types of accommodation are available?",          content: "The Lagoon offers a range of luxurious accommodations, including overwater bungalows, private beach villas, and secluded garden suites, each designed to provide ultimate comfort and stunning views."},
        {
          id: "faq2",          title: "What activities can I enjoy at The Lagoon?",          content: "Our diverse activities include guided kayaking, snorkeling and diving, beachside yoga, spa treatments, nature walks, wildlife spotting, and island excursions. There's something for every interest."},
        {
          id: "faq3",          title: "Is The Lagoon suitable for families with children?",          content: "Yes, The Lagoon is a family-friendly destination. We offer a variety of activities and amenities suitable for all ages, including a kids' club and dedicated family experiences. Please inquire for more details."},
      ]}
      sideTitle="Your Questions, Our Answers"
      sideDescription="Find quick solutions and detailed insights into planning your perfect escape to The Lagoon. We've compiled a list of common inquiries to assist you."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Connect With Us"
      title="Your Journey Begins Here"
      description="Ready to discover the magic of The Lagoon? Reach out to our dedicated team for reservations, inquiries, or personalized assistance. We're here to help you plan your dream escape."
      buttons={[
        {
          text: "Book Your Stay",          href: "#"},
        {
          text: "Send an Email",          href: "mailto:info@thelagoon.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="The Lagoon"
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Gallery",              href: "#gallery"},
          ],
        },
        {
          title: "Experiences",          items: [
            {
              label: "Activities",              href: "#activities"},
            {
              label: "Wellness",              href: "#activities"},
            {
              label: "Nature Tours",              href: "#activities"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQs",              href: "#faq"},
            {
              label: "Reservations",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2024 The Lagoon. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
