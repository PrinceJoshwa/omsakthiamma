import PageTemplate from '@/components/PageTemplate';

export default function SocialActivityPage() {
  return (
    <PageTemplate
      title="Social Activity"
      subtitle="Service to Humanity"
      imageSrc="/social.png"
      noTopPadding={true}
      noContentTopPadding={true}
      content="We believe in serving society through various social initiatives and community projects. Our social activities reflect our commitment to uplifting humanity and creating positive change."
    />
  );
}
