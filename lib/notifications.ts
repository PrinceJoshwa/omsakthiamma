// path: data/notifications.ts

export type NotificationType = 'pdf' | 'image';

export interface NotificationItem {
  id: string;      // Unique ID (e.g., '2025-12-22-1')
  title: string;   // Display title
  date: string;    // Format: YYYY-MM-DD (Crucial for sorting logic)
  fileSize: string;
  type: NotificationType;
  urls: string[];     // Path inside the public folder
}

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  // --- ADD NEW NOTIFICATIONS HERE ---
  // The page will automatically sort these (Newest date will appear at the top)
  
  {
    id: '2026-02-09-1',
    title: 'ஆதிபராசக்தி மருத்துவமனை - சுற்றறிக்கை ',
    date: '2026-02-09',
    fileSize: '1.2 MB',
    type: 'image',
    urls: ['/02.09.26.jpeg'],
  },
  {
    id: '2025-11-27-1',
    title: 'திரு குடமுழுக்கு விழா- பண்ருட்டி (கடலூர்)',
    date: '2026-01-23',
    fileSize: '1.2 MB',
    type: 'image',
    urls: ['/invitation.jpeg', '/invitation1.jpeg'],
  },
  {
    id: '2025-11-27-1',
    title: 'Thaipusam Irumudi Festival 2025-26 - Official Instructions',
    date: '2025-11-27',
    fileSize: '1.2 MB',
    type: 'pdf',
    urls: ['/IRUMUDI-INSTRUCTIONS.pdf'],
  },
  {
    id: '2025-12-22-1',
    title: 'List of Mandatory Items for Irumudi Bag - 2025',
    date: '2025-12-22',
    fileSize: '450 kb',
    type: 'image',
    urls: ['/notices/22.12.25.jpeg'],
  },
  {
    id: '2025-12-12-1',
    title: 'District-wise Time Schedule for Irumudi Submission',
    date: '2025-12-12',
    fileSize: '320 kb',
    type: 'image',
    urls: ['/notices/12.12.2025.jpeg'], 
  },
  {
    id: '2025-12-12-2',
    title: 'Mandram Karuvarai Pani Schedule (Dec 2025)',
    date: '2025-12-12',
    fileSize: '380 kb',
    type: 'image',
    urls: ['/notices/12.12.25.jpeg'],
  },
    {
    id: '2026-01-31-1',
    title: '86 வது அவதாரத்திருநாள் மக்கள் நலப்பணி 2026',
    date: '2026-01-31',
    fileSize: '1.45 MB',
    type: 'pdf'
    ,
    urls: ['/notices/86.pdf','/notices/12.12.25.jpeg'],
  },
    {
    id: '2026-02-02-1',
    title: 'அருள்மிகு அம்மா அவர்களின் 86வது அவதாரத்திருநாள் ஜோதி வழிபாடு',
    date: '2026-02-02',
    fileSize: '45.6kb',
    type: 'image'
    ,
    urls: ['/notices/02.02.2026.jpeg'],
  },
  
]