export const rooms = [
  {
    id: 'dorm-6',
    name: '6-Bed Mixed Dorm',
    type: 'Dorm',
    pricePerNight: 499,
    capacity: 1,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Wi‑Fi', 'Locker', 'Shared bathroom', 'Reading light', 'Power socket'],
    description:
      'Budget-friendly dorm bed with clean linen, personal locker, and a social vibe. Great for solo travellers.',
    policies: ['Check-in: 12:00 PM', 'Check-out: 10:00 AM', 'No smoking', 'Quiet hours: 11 PM – 7 AM'],
  },
  {
    id: 'private-standard',
    name: 'Private Standard Room',
    type: 'Private',
    pricePerNight: 1199,
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Wi‑Fi', 'Attached bathroom', 'Hot water', 'Desk', 'Fan/AC (seasonal)'],
    description:
      'Comfortable private room for couples or friends with work desk and attached bathroom for extra privacy.',
    policies: ['Check-in: 12:00 PM', 'Check-out: 10:00 AM', 'ID proof required at check-in'],
  },
  {
    id: 'family-deluxe',
    name: 'Family Deluxe Room',
    type: 'Family',
    pricePerNight: 1899,
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1560067174-8943bd2f30f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    ],
    amenities: ['Wi‑Fi', 'Attached bathroom', 'Extra space', 'Wardrobe', 'Hot water'],
    description:
      'Spacious family room with extra beds and storage. Ideal for small families or groups.',
    policies: ['Check-in: 12:00 PM', 'Check-out: 10:00 AM', 'No parties'],
  },
]

export function getRoomById(roomId) {
  return rooms.find((r) => r.id === roomId) || null
}
