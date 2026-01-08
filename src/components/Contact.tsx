import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
	return (
		<section id="contact" className="py-24 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-portfolio-accent/5 via-background to-background opacity-50" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto text-center"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm mb-8"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
						</span>
						<span className="text-sm font-medium text-muted-foreground">
							Available for work
						</span>
					</motion.div>

					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-space font-bold tracking-tight mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 px-2">
						Let's create something
						<br />
						extraordinary
					</h2>

					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
						I am actively seeking full-time software engineering roles and
						freelance opportunities. If you're looking for a developer who can
						deliver robust web solutions and innovative AI integrations, I'd
						love to discuss how I can contribute to your team.
					</p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4"
					>
						<Button
							size="lg"
							className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-base sm:text-lg gap-2 bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
							onClick={() =>
								(window.location.href = "mailto:prabhjotassi16@gmail.com")
							}
						>
							<Mail className="w-4 h-4 sm:w-5 sm:h-5" />
							Send an email
							<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="h-12 sm:h-14 px-6 sm:px-8 rounded-full text-base sm:text-lg gap-2 border-2 border-border/60 text-foreground hover:text-portfolio-accent hover:border-portfolio-accent hover:bg-portfolio-accent/10 dark:hover:bg-portfolio-accent/20 transition-all duration-300 w-full sm:w-auto"
							onClick={() =>
								window.open(
									"https://linkedin.com/in/prabhjotsinghassi",
									"_blank",
								)
							}
						>
							<MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
							DM on LinkedIn
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
