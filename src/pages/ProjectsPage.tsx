import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactComparisonSlider from 'react-image-comparison-slider';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageBefore: string;
  imageAfter: string;
  details: string;
}

const ProjectsPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Project categories for filtering
  const categories = ['All', 'Residential', 'Kitchen', 'Bathroom', 'Full-Home'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Farmhouse',
      category: 'Residential',
      description: 'Custom-built modern farmhouse with open floor plan and premium finishes.',
      imageBefore: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'This 3,200 sq ft custom home features 4 bedrooms, 3.5 bathrooms, and a gourmet kitchen. Built with energy-efficient materials and smart home technology.'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Renovation',
      category: 'Kitchen',
      description: 'Complete kitchen transformation with custom cabinetry and high-end appliances.',
      imageBefore: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'This kitchen remodel included custom maple cabinetry, quartz countertops, a large island with seating, and professional-grade stainless steel appliances.'
    },
    {
      id: 3,
      title: 'Master Bath Retreat',
      category: 'Bathroom',
      description: 'Spa-inspired bathroom with custom tile work, soaking tub, and luxury fixtures.',
      imageBefore: 'https://images.unsplash.com/photo-1631735236268-7bd8b5c4e359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'This master bathroom renovation features a freestanding soaking tub, walk-in shower with rainfall head, custom vanity with double sinks, and heated tile flooring.'
    },
    {
      id: 4,
      title: 'Contemporary Home Remodel',
      category: 'Full-Home',
      description: 'Complete transformation of a 1970s home into a modern, open-concept living space.',
      imageBefore: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1600607687644-a7e5a079593c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'This whole-home remodel included removing walls to create an open floor plan, updating all bathrooms and the kitchen, installing new flooring throughout, and modernizing all fixtures and finishes.'
    },
    {
      id: 5,
      title: 'Craftsman Bungalow',
      category: 'Residential',
      description: 'New construction of a craftsman-style bungalow with traditional details and modern amenities.',
      imageBefore: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'This 2,400 sq ft craftsman bungalow features 3 bedrooms, 2.5 bathrooms, a covered front porch, built-in cabinetry, and period-appropriate details throughout.'
    },
    {
      id: 6,
      title: 'Gourmet Kitchen Update',
      category: 'Kitchen',
      description: 'Transformation of a dated kitchen into a chef-worthy cooking space with high-end finishes.',
      imageBefore: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      imageAfter: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      details: 'This kitchen remodel included custom cabinetry with soft-close drawers, marble countertops, a professional gas range, wine refrigerator, and custom tile backsplash.'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // State for modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/80">
              Browse our portfolio of completed construction and remodeling projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-slate-600">
              Explore our completed projects and see the transformations we've created for our clients.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openModal(project)}
              >
                <div className="relative h-64">
                  <img 
                    src={project.imageAfter} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="inline-block bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <motion.div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{selectedProject.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-teal-600 text-white text-sm font-medium px-2 py-1 rounded mb-2">
                  {selectedProject.category}
                </span>
                <p className="text-lg text-slate-600 mb-4">{selectedProject.description}</p>
                <p className="text-slate-600">{selectedProject.details}</p>
              </div>
              
              <div className="h-80 mb-6">
                <div className="h-full w-full relative">
                  <div className="h-full">
                    <ReactComparisonSlider
                      image1={selectedProject.imageBefore}
                      image2={selectedProject.imageAfter}
                      alt1="Before"
                      alt2="After"
                      sliderColor="#14b8a6"
                      handleColor="#14b8a6"
                      sliderWidth={2}
                      showHandle={true}
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-2 py-1 rounded">Before</div>
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">After</div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact us today to discuss your project and get a free quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a 
                href="/contact" 
                className="bg-white hover:bg-slate-100 text-teal-600 px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
