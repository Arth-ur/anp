export interface RsvpFormData {
  fullName: string;
  partnerName: string;
  isAttending: string;
  comment: string;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}