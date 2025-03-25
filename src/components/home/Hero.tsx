import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import { motion } from "framer-motion";

const Hero = () => {
  const transformationChartRef = useRef<HTMLCanvasElement>(null);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize charts
  useEffect(() => {
    // Digital Transformation ROI Chart - Clean line graph
    if (transformationChartRef.current) {
      const transformationCtx = transformationChartRef.current.getContext('2d');
      
      const gradient = transformationCtx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.2)');
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');
      
      new Chart(transformationCtx, {
        type: 'line',
        data: {
          labels: ['Traditional', 'Digitizing', 'Digital Native', 'AI-Powered'],
          datasets: [{
            label: 'Revenue Growth',
            data: [1, 2.1, 3.0, 5.8],
            borderColor: '#f97316',
            backgroundColor: gradient,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#f97316',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              titleColor: '#1e293b',
              bodyColor: '#1e293b',
              borderColor: 'rgba(0, 0, 0, 0.05)',
              borderWidth: 1,
              padding: 10,
              cornerRadius: 4,
              callbacks: {
                label: function(context) {
                  return `${context.parsed.y}x growth`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#94a3b8',
                font: {
                  size: 11
                }
              }
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.03)',
                drawTicks: false,
                lineWidth: 1
              },
              ticks: {
                color: '#94a3b8',
                font: {
                  size: 11
                },
                callback: function(value) {
                  return value + 'x';
                }
              },
              suggestedMin: 0,
              suggestedMax: 6
            }
          },
          elements: {
            line: {
              borderWidth: 3
            }
          }
        }
      });
    }

    // Add the CSS to the document head
    const style = document.createElement('style');
    style.innerHTML = `
      .highlight-word {
        position: relative;
        z-index: 1;
        color: #000000 !important; /* Force black color */
      }
      
      .highlight-word::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 5px;
        width: 0;
        height: 10px;
        background-color: #f97316;
        z-index: -1;
        animation: slide-in 1.5s forwards ease-out;
      }
      
      .highlight-word.second::after {
        animation-delay: 0.5s;
      }
      
      @keyframes slide-in {
        0% { width: 0; }
        100% { width: 100%; }
      }
      
      .chart-card {
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
        background-color: white;
        border-radius: 12px;
      }
      
      .chart-container {
        height: 200px;
        width: 100%;
        margin: 0 auto;
      }
      
      .stat-value {
        color: #1e293b;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.2;
      }
      
      .stat-label {
        color: #64748b;
        font-size: 0.8rem;
        font-weight: 500;
        margin-top: 4px;
      }
      
      .source-tag {
        color: #94a3b8;
        font-size: 0.7rem;
        font-weight: 500;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 20px;
      }
      
      .stat-item {
        text-align: center;
        padding: 12px;
        border-radius: 8px;
        background-color: rgba(249, 250, 251, 0.7);
      }
      
      .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 4px;
      }
      
      .card-subtitle {
        font-size: 0.875rem;
        color: #64748b;
        margin-bottom: 20px;
      }
      
      @media (max-width: 640px) {
        .chart-container {
          height: 180px;
        }
        
        .stat-value {
          font-size: 1.25rem;
        }
        
        .stat-label {
          font-size: 0.75rem;
        }
      }
      
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 2rem 0;
      }
      
      @media (max-width: 1024px) {
        .hero-section {
          min-height: auto;
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero-section bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left content column - 6 columns wide */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-black">
                <div>
                  Turning <span className="highlight-word">Data</span> into
                </div>
                <div>
                  Business <span className="highlight-word second">Advantage</span>
                </div>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg mt-6">
                Leverage your data's full potential with our expert consulting 
                services. We turn information into insights that drive growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
                <a href="mailto:info@basilconsulting.com">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToFeatures}
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                Explore Our Solutions
              </Button>
            </motion.div>
          </div>
          
          {/* Right stats column - 6 columns wide */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="chart-card p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="card-title">Digital Transformation ROI</h3>
                  <p className="card-subtitle">Revenue growth by digital maturity stage</p>
                </div>
                
                <div className="chart-container">
                  <canvas ref={transformationChartRef}></canvas>
                </div>
                
                <div className="mt-6">
                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-value">5.8x</div>
                      <div className="stat-label">AI-Powered Growth</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">3.0x</div>
                      <div className="stat-label">Digital Native</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">2.1x</div>
                      <div className="stat-label">Digitizing</div>
                    </div>
                  </div>
                  <div className="text-right mt-6">
                    <span className="source-tag">Source: McKinsey & Company Digital Transformation Report 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-64 md:h-64 bg-orange-50 rounded-full -z-10 blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full -z-10 blur-sm"></div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
