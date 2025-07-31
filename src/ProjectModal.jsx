import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function ProjectModal({ project, onClose }) {
  const [showVideo, setShowVideo] = useState(false)

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
    return match ? match[1] : null
  }

  const videoId = getYouTubeId(project.video)

  // Variants per animazioni di apertura/chiusura
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } },
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          onClick={onClose} // chiude cliccando sullo sfondo
        >
          <motion.div
            className="bg-white text-black max-w-3xl w-full rounded-xl relative shadow-2xl overflow-hidden max-h-screen"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // previene chiusura se clicco dentro la modal
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-black text-xl z-10"
            >
              ✕
            </button>

            <div className="p-6 overflow-y-auto max-h-screen">
              {project.images?.length > 0 && (
                <div className="mb-4 rounded overflow-hidden">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                  >
                    {project.images.map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={src} alt="" className="w-full h-64 object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <span className="text-sm px-2 py-1 bg-gray-800 text-white rounded-full inline-block mb-4">
                {project.type}
              </span>

              <p className="mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-4 mb-4 justify-start">
                {videoId && !showVideo && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="underline text-black font-body"
                  >
                    Watch the Video
                  </button>
                )}
                {project.doc && (
                  <a href={project.doc} target="_blank" className="underline text-black font-body">
                    Go to Link
                  </a>
                )}
              </div>

              {showVideo && videoId && (
                <div className="mt-4 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Video progetto"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full rounded"
                  ></iframe>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
