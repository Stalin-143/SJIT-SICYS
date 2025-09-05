export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          {/* Mission Statement */}
          <div className="mb-12">
            <p className="text-xl leading-relaxed text-foreground mb-6">
              Our WiCyS (Women in Cybersecurity) chapter is dedicated to building a strong, inclusive community 
              that advances the participation of women in cybersecurity. We host educational events, mentorship 
              programs, and hands-on workshops that foster professional growth, technical skills, and leadership 
              opportunities for members at every level.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Story</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Founded with the vision of creating an inclusive space for women in cybersecurity, our chapter 
              emerged from the recognition that diversity drives innovation in the field of information security. 
              We started as a small group of passionate cybersecurity professionals and students who wanted to 
              create opportunities for women to thrive in this critical industry.
            </p>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Since our inception, we have grown into a vibrant community that spans across academia and industry, 
              bringing together students, researchers, practitioners, and leaders who share a common goal: 
              advancing cybersecurity through diversity and inclusion. Our inaugural ceremony marked the beginning 
              of a journey that continues to evolve with each new member and every event we host.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">🎯 Educational Workshops</h3>
                <p className="text-foreground/80 text-sm">
                  Hands-on technical sessions covering penetration testing, threat analysis, cloud security, 
                  and emerging cybersecurity technologies. Our workshops are designed for all skill levels, 
                  from beginners to advanced practitioners.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">🏆 Competitions & CTFs</h3>
                <p className="text-foreground/80 text-sm">
                  Organize and participate in Capture The Flag competitions like "Snipers 2.0," providing 
                  real-world cybersecurity challenges that test and develop practical skills in a supportive 
                  environment.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">👥 Mentorship Programs</h3>
                <p className="text-foreground/80 text-sm">
                  Connect students and early-career professionals with experienced mentors in cybersecurity. 
                  Our mentorship programs focus on career development, technical skill building, and 
                  leadership growth.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">🎤 Speaker Series</h3>
                <p className="text-foreground/80 text-sm">
                  Host renowned cybersecurity experts who share insights on industry trends, career paths, 
                  and cutting-edge research. Our International Speakers Series brings global perspectives 
                  to our local community.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">☁️ Cloud Security Focus</h3>
                <p className="text-foreground/80 text-sm">
                  Specialized events like AWS Community Day that focus on cloud security best practices, 
                  helping members stay current with the rapidly evolving cloud security landscape.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">🤝 Professional Development</h3>
                <p className="text-foreground/80 text-sm">
                  Career-focused sessions including resume reviews, mock interviews with industry volunteers, 
                  and networking opportunities that help members advance their cybersecurity careers.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Inclusivity</h3>
                  <p className="text-foreground/80 text-sm">
                    We believe that cybersecurity is strengthened by diverse perspectives and welcome 
                    individuals from all backgrounds, experience levels, and career stages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-foreground/80 text-sm">
                    We strive for the highest standards in everything we do, from our technical workshops 
                    to our community events, ensuring members receive valuable, high-quality experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Collaboration</h3>
                  <p className="text-foreground/80 text-sm">
                    We foster an environment where knowledge sharing, peer learning, and mutual support 
                    are fundamental to our community's growth and success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-foreground/80 text-sm">
                    We embrace new technologies, methodologies, and approaches in cybersecurity, 
                    encouraging creative problem-solving and forward-thinking solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Empowerment</h3>
                  <p className="text-foreground/80 text-sm">
                    We empower our members to become leaders in cybersecurity by providing the tools, 
                    knowledge, and confidence needed to excel in their careers and make meaningful contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Who Can Join */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Who Can Join</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Our chapter welcomes anyone interested in advancing women's participation in cybersecurity, 
              regardless of their current experience level or background. Whether you're:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>A student exploring cybersecurity as a career path</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>An early-career professional looking to develop technical skills</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>An experienced practitioner wanting to mentor others</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>A career changer transitioning into cybersecurity</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent">•</span>
                <span>Someone passionate about diversity and inclusion in tech</span>
              </li>
            </ul>
            <p className="leading-relaxed text-foreground/80 mt-4">
              You'll find a supportive community ready to help you grow, learn, and succeed in the 
              dynamic field of cybersecurity.
            </p>
          </div>

          {/* Impact & Future */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Impact & Future Vision</h2>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Since our establishment, we have successfully created a platform where women in cybersecurity 
              can connect, learn, and grow together. Our events have attracted participants from diverse 
              backgrounds, fostering an environment where knowledge flows freely and professional relationships 
              flourish.
            </p>
            <p className="leading-relaxed text-foreground/80 mb-4">
              Looking ahead, we envision expanding our reach to include more specialized technical tracks, 
              research collaborations, and industry partnerships. We aim to become a recognized hub for 
              cybersecurity education and professional development, contributing to the broader goal of 
              achieving gender parity in the cybersecurity workforce.
            </p>
            <p className="leading-relaxed text-foreground/80">
              Our ultimate goal is to see more women in leadership positions across all sectors of 
              cybersecurity—from technical roles in incident response and penetration testing to executive 
              positions shaping organizational security strategy. Through our continued efforts, we strive 
              to make cybersecurity more inclusive, innovative, and effective for everyone.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="leading-relaxed text-foreground/80 mb-6">
              Ready to be part of a community that's shaping the future of cybersecurity? Whether you're 
              taking your first steps in cybersecurity or you're an experienced professional looking to 
              give back, we'd love to have you join us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Involved
              </a>
              <a
                href="/home#events"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
              >
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
