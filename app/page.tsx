"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code2, Database, Zap, ChevronLeft, ChevronRight, Github, Linkedin, Instagram, Menu, X } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas con HTML, React, Next.js y Django. Interfaces responsivas y optimizadas para cualquier dispositivo.",
  },
  {
    icon: Database,
    title: "Integración de APIs",
    description:
      "Conectamos tu negocio con servicios externos. Desarrollo de APIs RESTful y GraphQL escalables y seguras.",
  },
  {
    icon: Zap,
    title: "Automatización y Bots",
    description:
      "Automatiza procesos repetitivos y ahorra tiempo. Bots inteligentes para WhatsApp, Telegram y más plataformas.",
  },
]

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico con pasarela de pagos integrada y panel de administración completo.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Sistema de Gestión",
    description: "Sistema CRM personalizado para gestión de clientes, ventas y reportes en tiempo real.",
    image: "/crm-dashboard-interface.jpg",
    tags: ["Next.js", "PostgreSQL", "API"],
  },
  {
    title: "Bot de Automatización",
    description: "Bot inteligente para atención al cliente 24/7 con integración a WhatsApp Business.",
    image: "/chatbot-interface.png",
    tags: ["Python", "AI", "WhatsApp"],
  },
]

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "Benichi Dev Studio transformó nuestra idea en una aplicación funcional en tiempo récord. Su profesionalismo y atención al detalle son excepcionales.",
  },
  {
    name: "Carlos Ramírez",
    role: "Director, InnovaShop",
    content:
      "La integración de APIs que desarrollaron mejoró nuestra eficiencia operativa en un 300%. Altamente recomendados para proyectos complejos.",
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, AutomateNow",
    content:
      "El bot de automatización que crearon nos ahorra más de 20 horas semanales. La inversión se pagó sola en el primer mes.",
  },
]

export default function BenichiDevStudio() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Nos pondremos en contacto pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Benichi Dev Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacto
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Hablemos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Proyectos
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left text-sm font-medium transition-colors hover:text-primary"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Hablemos
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4 py-20 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Tecnología de Alto Nivel
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight lg:text-6xl">
                Impulsa tu presencia digital con tecnología de alto nivel
              </h1>
              <p className="text-pretty text-lg text-muted-foreground lg:text-xl">
                Desarrollo web, APIs y automatización para tu negocio. Transformamos ideas en soluciones digitales
                escalables y eficientes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={() => scrollToSection("contacto")}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Agenda una reunión
                </Button>
                <Button onClick={() => scrollToSection("proyectos")} size="lg" variant="outline">
                  Ver proyectos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
              <img src="/modern-tech-workspace-with-code.jpg" alt="Tech workspace" className="relative rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold lg:text-5xl">Nuestros Servicios</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Soluciones tecnológicas personalizadas para impulsar tu negocio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold lg:text-5xl">Proyectos Destacados</h2>
            <p className="text-pretty text-lg text-muted-foreground">Algunos de nuestros trabajos más recientes</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver más
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold lg:text-5xl">Lo que dicen nuestros clientes</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Testimonios reales de empresas que confiaron en nosotros
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm lg:p-12">
              <div className="space-y-6">
                <p className="text-pretty text-lg leading-relaxed lg:text-xl">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button onClick={prevTestimonial} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentTestimonial ? "w-8 bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button onClick={nextTestimonial} variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold lg:text-5xl">¿Listo para colaborar?</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
              </p>
            </div>

            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none bg-background"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Benichi Dev Studio</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2025 Benichi Dev Studio. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
