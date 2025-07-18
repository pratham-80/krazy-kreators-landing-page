import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from '../components/ui/card';

const ComparisonSection = () => {
  const features = [
    {
      feature: "End-to-end support",
      subtitle: "From design to dispatch",
      krazyKreators: "Complete journey support",
      others: "Fragmented services",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "No or low MOQ",
      subtitle: "For emerging brands",
      krazyKreators: "Flexible minimums",
      others: "High MOQ requirements",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "Real-time tracking",
      subtitle: "Dedicated dashboard",
      krazyKreators: "Live project updates",
      others: "Limited visibility",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "Transparent costing",
      subtitle: "With tech pack access",
      krazyKreators: "Full cost breakdown",
      others: "Hidden fees & charges",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "Creative collaboration",
      subtitle: "Personalized approach",
      krazyKreators: "Direct designer access",
      others: "Generic solutions",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "Expert procurement",
      subtitle: "Material & QC led",
      krazyKreators: "Quality-first sourcing",
      others: "Basic quality checks",
      krazyKreatorsValue: true,
      othersValue: false,
    },
    {
      feature: "Brand guidance",
      subtitle: "Educational resources",
      krazyKreators: "Growth partnership",
      others: "Transactional only",
      krazyKreatorsValue: true,
      othersValue: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Krazy Kreators stands out from the competition with our innovative approach to fashion-tech solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left font-semibold text-gray-700 py-4 px-6">
                      Feature
                    </th>
                    <th className="text-center font-semibold text-gray-700 py-4 px-6">
                      Krazy Kreators
                    </th>
                    <th className="text-center font-semibold text-gray-700 py-4 px-6">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <tr 
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-medium text-gray-900 mb-1">
                            {item.feature}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.subtitle}
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="flex flex-col items-center">
                          <div className="mb-2">
                            {item.krazyKreatorsValue ? (
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-600" />
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-gray-700 font-medium">
                            {item.krazyKreators}
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="flex flex-col items-center">
                          <div className="mb-2">
                            {item.othersValue ? (
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                <X className="w-4 h-4 text-red-600" />
                              </div>
                            )}
                          </div>
                          <div className="text-sm text-gray-700 font-medium">
                            {item.others}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection; 