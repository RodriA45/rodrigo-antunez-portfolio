import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageModal.css';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({ images, currentIndex, isOpen, onClose, onNext, onPrev }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) onNext();
      if (e.key === 'ArrowLeft' && images.length > 1) onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev, images.length]);

  if (!isOpen) return null;

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Cerrar modal">
          <FaTimes />
        </button>

        <img src={images[currentIndex]} alt="Visualización del proyecto" className="lightbox-image" />

        {images.length > 1 && (
          <>
            <button className="lightbox-btn lightbox-prev" onClick={() => onPrev()} aria-label="Imagen anterior">
              <FaChevronLeft size={20} />
            </button>
            <button className="lightbox-btn lightbox-next" onClick={() => onNext()} aria-label="Siguiente imagen">
              <FaChevronRight size={20} />
            </button>
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
