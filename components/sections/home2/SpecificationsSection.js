
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Palette, 
  Zap, 
  Droplets, 
  DoorOpen, 
  Shield,
  CheckCircle
} from "lucide-react";

const specifications = {
  structure: {
    title: "Structure & Construction",
    icon: Home,
    items: [
      "RCC framed structure with lateral wall for exterior",
      "Concrete block wall for internal walls",
      "Superior 800x800 Vitrified Floor Tiles (GVT Tiles)",
      "Granite flooring for common areas and staircase",
      "External painting with weather coat paints and waterproof coating"
    ]
  },
  interiors: {
    title: "Interior Finishes",
    icon: Palette,
    items: [
      "Designed Glazed Tiles for Toilets and Kitchen (24\" Above Platform)",
      "Granite Platform with Bull Nosing and Granite/SS Sink for Kitchen",
      "Putty Finished Emulsion Painting for Ceiling and Walls",
      "Anti Skid ceramic tiles for bathroom floors",
      "Ceramic glazed tiles dado up to 7ft height in bathrooms"
    ]
  },
  electrical: {
    title: "Electrical & Technology",
    icon: Zap,
    items: [
      "Above 3KW power provided for each apartment with single phase meter",
      "Modular Electrical Switches (Anchor/Roma/Legrand)",
      "Electrical Wiring of Reputed Brand",
      "TV Point and Telephone/Intercom Connection",
      "AC Point Provision in all Bedrooms",
      "Power Failure Sensing Siren"
    ]
  },
  plumbing: {
    title: "Plumbing & Sanitary",
    icon: Droplets,
    items: [
      "Jaguar Fittings for Toilets and Kitchen/Equivalent",
      "Branded Sanitary Ware (Hindware/Parryware) in all Toilets",
      "Hot and cold mixer unit for all bathrooms",
      "Overhead water tank and underground sump tank with pumps",
      "Automatic water level controller for overhead tank",
      "Pressure checked plumbing and drainage lines"
    ]
  },
  doors: {
    title: "Doors & Windows",
    icon: DoorOpen,
    items: [
      "Attractive melamine/PU coated decorative main entrance door",
      "Hardwood door frames with superior Teakwood door shutters",
      "Granite frame with fibrotech shutter doors for Toilets",
      "Colour Coated UPVC window frames and steel grills",
      "Superior Designer Locks for all Inside Doors",
      "Brass Hardware for main door & steel tubular locks"
    ]
  },
  safety: {
    title: "Safety & Security",
    icon: Shield,
    items: [
      "Adequate Fire Fighting Systems",
      "CCTV in visitors lounge",
      "2 automatic elevators of reputed brand",
      "Emergency lighting systems",
      "Security provisions in common areas"
    ]
  }
};

export default function SpecificationsSection() {
  const [activeTab, setActiveTab] = useState("structure");

  return (
    <section id="specifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="text-yellow-400">Specifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every detail crafted with precision using the finest materials and 
            latest technology to ensure quality and durability.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl mb-8">
              {Object.entries(specifications).map(([key, spec]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex flex-col items-center p-3 gap-2 data-[state=active]:bg-yellow-400/20 data-[state=active]:text-yellow-400 text-gray-300"
                >
                  <spec.icon className="w-5 h-5" />
                  <span className="text-xs font-medium hidden sm:inline">
                    {spec.title.split(' ')[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(specifications).map(([key, spec]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="shadow-2xl bg-gray-800 border-gray-700">
                    <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-t-lg">
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <spec.icon className="w-8 h-8" />
                        {spec.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 bg-gray-800">
                      <div className="grid md:grid-cols-2 gap-4">
                        {spec.items.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-gray-700/50 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-200 font-medium">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Quality Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-lg px-6 py-2 font-semibold">
                Quality Assured
              </Badge>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Branded Materials & Trusted Partners
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              We work exclusively with renowned brands like Jaguar, Hindware, Parryware, 
              Anchor, Roma, and Legrand to ensure the highest quality in every aspect of construction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Jaguar", "Hindware", "Parryware", "Anchor", "Roma", "Legrand"].map((brand, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full font-medium border border-gray-600"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
