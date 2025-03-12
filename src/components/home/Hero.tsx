import { ArrowRight, BarChart2, LineChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const aiChartRef = useRef(null);
  const transformationChartRef = useRef(null);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize charts
  useEffect(() => {
    // AI Impact Chart - Clean line graph
    if (aiChartRef.current) {
      const aiCtx = aiChartRef.current.getContext('2d');
      new Chart(aiCtx, {
        type: 'line',
        data: {
          labels: ['2023', '2025', '2027', '2030'],
          datasets: [{
            label: 'AI Economic Impact',
            data: [2, 5.2, 8.5, 13],
            borderColor: '#f97316',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            tension: 0.3,
            fill: false,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#f97316',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5
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
              padding: 8,
              cornerRadius: 4,
              callbacks: {
                label: function(context) {
                  return `$${context.parsed.y}T`;
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
                  size: 9
                }
              }
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.03)',
                drawBorder: false
              },
              ticks: {
                color: '#94a3b8',
                font: {
                  size: 9
                },
                callback: function(value) {
                  return '$' + value + 'T';
                }
              },
              suggestedMin: 0,
              suggestedMax: 16
            }
          },
          elements: {
            line: {
              borderWidth: 2
            }
          }
        }
      });
    }

    // Digital Transformation ROI Chart - Clean line graph
    if (transformationChartRef.current) {
      const transformationCtx = transformationChartRef.current.getContext('2d');
      new Chart(transformationCtx, {
        type: 'line',
        data: {
          labels: ['Traditional', 'Digitizing', 'Digital Native', 'AI-Powered'],
          datasets: [{
            label: 'Revenue Growth',
            data: [1, 2.1, 3.0, 5.8],
            borderColor: '#f97316',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            tension: 0.3,
            fill: false,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: '#f97316',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5
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
              padding: 8,
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
                  size: 9
                }
              }
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.03)',
                drawBorder: false
              },
              ticks: {
                color: '#94a3b8',
                font: {
                  size: 9
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
              borderWidth: 2
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
      
      .case-study-card {
        border: 1px solid rgba(0, 0, 0, 0.05);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
        background-color: white;
        border-radius: 8px;
      }
      
      .case-study-card:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
      
      .chart-container {
        height: 140px;
        margin: 0 -8px;
        padding: 0 8px;
      }
      
      .stat-value {
        color: #1e293b;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.2;
      }
      
      .stat-label {
        color: #64748b;
        font-size: 0.7rem;
        font-weight: 500;
        margin-top: 2px;
      }
      
      .source-tag {
        color: #94a3b8;
        font-size: 0.65rem;
        font-weight: 500;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 16px;
      }
      
      .stat-item {
        text-align: center;
      }
      
      .card-title {
        font-size: 1.125rem;
        font-weight: 600;
        color: #1e293b;
        margin-bottom: 2px;
      }
      
      .card-subtitle {
        font-size: 0.8rem;
        color: #64748b;
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content column - 6 columns wide */}
          <div className="lg:col-span-6 space-y-8">
            <div className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              <div>
                Turning <span className="highlight-word">Data</span> into
              </div>
              <div>
                Business <span className="highlight-word second">Advantage</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Leverage your data's full potential with our expert consulting 
              services. We turn information into insights that drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                className="border-basil-600 text-basil-600 hover:bg-basil-50"
              >
                Explore Our Solutions
              </Button>
            </div>
          </div>
          
          {/* Right stats column - 6 columns wide */}
          <div className="lg:col-span-6">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
              >
                <img 
                  src="/lovable-uploads/c9a9c9a9-c9a9-c9a9-c9a9-c9a9c9a9c9a9.png" 
                  alt="Data visualization" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
              
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-basil-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
