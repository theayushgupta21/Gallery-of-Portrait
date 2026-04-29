import { create } from 'zustand';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  caption?: string;
  height: number; // For masonry logic
}

interface GalleryState {
  images: GalleryImage[];
  isModalOpen: boolean;
  currentIndex: number;
  setImages: (images: GalleryImage[]) => void;
  openModal: (index: number) => void;
  closeModal: () => void;
  nextImage: () => void;
  prevImage: () => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  images: [],
  isModalOpen: false,
  currentIndex: 0,
  setImages: (images) => set({ images }),
  openModal: (index) => set({ isModalOpen: true, currentIndex: index }),
  closeModal: () => set({ isModalOpen: false }),
  nextImage: () => set((state) => ({
    currentIndex: (state.currentIndex + 1) % state.images.length
  })),
  prevImage: () => set((state) => ({
    currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length
  })),
}));
