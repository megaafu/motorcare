"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { AllBrands } from "@/app/[locale]/about/constants/brands";
import Image from "next/image";
import { Title, Text, Button } from "@mantine/core";

const ModelDetailPage: React.FC = () => {
  const params = useParams();
  const brandId = params.id as string;
  const modelId = params.modelId as string;
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("robustness");

  const brand = AllBrands.brands.find((b) => b.id === Number(brandId));
  const model = brand?.models?.find((m) => m.id === Number(modelId));

  // Tab content based on series type with images for each feature
  const tabContent = {
    K: {
      robustness: {
        title: t("Renault.tabs.robustness.title"),
        subtitle: t("Renault.tabs.robustness.subtitleK"),
        description: t("Renault.tabs.robustness.descriptionK"),
        features: [
          {
            image: "/serie-k/Robust-1.png",
            title: t("Renault.tabs.robustness.features.steelBumper"),
            description: t("Renault.tabs.robustness.features.steelBumperDesc")
          },
          {
            image: "/serie-k/Robust-2.png",
            title: t("Renault.tabs.robustness.features.polycarbonateLights"),
            description: t("Renault.tabs.robustness.features.polycarbonateLightsDesc")
          },
          {
            image: "/serie-k/Robust-3.png",
            title: t("Renault.tabs.robustness.features.reinforcedMembers"),
            description: t("Renault.tabs.robustness.features.reinforcedMembersDesc")
          },
          {
            image: "/serie-k/Robust-4.png",
            title: t("Renault.tabs.robustness.features.semiEllipticParabolicSuspension"),
            description: t("Renault.tabs.robustness.features.semiEllipticParabolicSuspensionDesc")
          }
        ]
      },
      profitability: {
        title: t("Renault.tabs.profitability.title"),
        subtitle: t("Renault.tabs.profitability.subtitleK"),
        description: t("Renault.tabs.profitability.descriptionK"),
        features: [
          {
            image: "/serie-k/Profibility-1.jpg",
            title: t("Renault.tabs.profitability.features.bracketsFixed"),
            description: t("Renault.tabs.profitability.features.bracketsFixedDesc")
          },
          {
            image: "/serie-k/Profibility-2.png",
            title: t("Renault.tabs.profitability.features.rearOverhangCustom"),
            description: t("Renault.tabs.profitability.features.rearOverhangCustomDesc")
          },
          {
            image: "/serie-k/Profibility-3.jpg",
            title: t("Renault.tabs.profitability.features.powerTakeOff"),
            description: t("Renault.tabs.profitability.features.powerTakeOffDesc")
          },
          {
            image: "/serie-k/Profibility-4.png",
            title: t("Renault.tabs.profitability.features.renaultK8x4"),
            description: t("Renault.tabs.profitability.features.renaultK8x4Desc")
          },
          {
            image: "/serie-k/Profibility-5.png",
            title: t("Renault.tabs.profitability.features.renaultK6x6"),
            description: t("Renault.tabs.profitability.features.renaultK6x6Desc")
          },
          {
            image: "/serie-k/Profibility-6.png",
            title: t("Renault.tabs.profitability.features.optidriverGearbox"),
            description: t("Renault.tabs.profitability.features.optidriverGearboxDesc")
          },
          {
            image: "/serie-k/Profibility-7.png",
            title: t("Renault.tabs.profitability.features.dxiEngines"),
            description: t("Renault.tabs.profitability.features.dxiEnginesDesc")
          },
          {
            image: "/serie-k/Profibility-8.png",
            title: t("Renault.tabs.profitability.features.doubleReductionAxle"),
            description: t("Renault.tabs.profitability.features.doubleReductionAxleDesc")
          },
          {
            image: "/serie-k/Profibility-9.png",
            title: t("Renault.tabs.profitability.features.offRoadMode"),
            description: t("Renault.tabs.profitability.features.offRoadModeDesc")
          },
          {
            image: "/serie-k/Profibility-10.png",
            title: t("Renault.tabs.profitability.features.powerMode"),
            description: t("Renault.tabs.profitability.features.powerModeDesc")
          }
        ]
      },
      comfort: {
        title: t("Renault.tabs.comfort.title"),
        subtitle: t("Renault.tabs.comfort.subtitleK"),
        description: t("Renault.tabs.comfort.descriptionK"),
        features: [
          {
            image: "/serie-k/Comfort-1.png",
            title: t("Renault.tabs.comfort.features.colorDisplay"),
            description: t("Renault.tabs.comfort.features.colorDisplayDesc")
          },
          {
            image: "/serie-k/Comfort-2.png",
            title: t("Renault.tabs.comfort.features.increasedCabVolume"),
            description: t("Renault.tabs.comfort.features.increasedCabVolumeDesc")
          },
          {
            image: "/serie-k/Comfort-3.png",
            title: t("Renault.tabs.comfort.features.drumBrakes"),
            description: t("Renault.tabs.comfort.features.drumBrakesDesc")
          },
          {
            image: "/serie-k/Comfort-4.png",
            title: t("Renault.tabs.comfort.features.hillStartAid"),
            description: t("Renault.tabs.comfort.features.hillStartAidDesc")
          }
        ]
      }
    },
    C: {
      robustness: {
        title: t("Renault.tabs.robustness.title"),
        subtitle: t("Renault.tabs.robustness.subtitleC"),
        description: t("Renault.tabs.robustness.descriptionC"),
        features: [
          {
            image: "/serie-c/robust-1.jpg",
            title: t("Renault.tabs.robustness.features.steelBumper"),
            description: t("Renault.tabs.robustness.features.steelBumperDescC")
          },
          {
            image: "/serie-c/robust-2.jpg",
            title: t("Renault.tabs.robustness.features.polycarbonateLights"),
            description: t("Renault.tabs.robustness.features.polycarbonateLightsDesc")
          },
          {
            image: "/serie-c/robust-3.jpg",
            title: t("Renault.tabs.robustness.features.steelCorners"),
            description: t("Renault.tabs.robustness.features.steelCornersDesc")
          },
          {
            image: "/serie-c/robust-4.png",
            title: t("Renault.tabs.robustness.features.mechanicalAirSuspension"),
            description: t("Renault.tabs.robustness.features.mechanicalAirSuspensionDesc")
          }
        ]
      },
      profitability: {
        title: t("Renault.tabs.profitability.title"),
        subtitle: t("Renault.tabs.profitability.subtitleC"),
        description: t("Renault.tabs.profitability.descriptionC"),
        features: [
          {
            image: "/serie-c/Profitability-1.png",
            title: t("Renault.tabs.profitability.features.bracketsFixed"),
            description: t("Renault.tabs.profitability.features.bracketsFixedDesc")
          },
          {
            image: "/serie-c/Profitability-2.png",
            title: t("Renault.tabs.profitability.features.aluminumTank"),
            description: t("Renault.tabs.profitability.features.aluminumTankDesc")
          },
          {
            image: "/serie-c/Profitability-3.png",
            title: t("Renault.tabs.profitability.features.rearOverhangCustom"),
            description: t("Renault.tabs.profitability.features.rearOverhangCustomDesc")
          },
          {
            image: "/serie-c/Profitability-4.jpg",
            title: t("Renault.tabs.profitability.features.powerTakeOff"),
            description: t("Renault.tabs.profitability.features.powerTakeOffDesc")
          },
          {
            image: "/serie-c/Profitability-5.png",
            title: t("Renault.tabs.profitability.features.renaultC8x4"),
            description: t("Renault.tabs.profitability.features.renaultC8x4Desc")
          },
          {
            image: "/serie-c/Profitability-6.png",
            title: t("Renault.tabs.profitability.features.renaultC6x4"),
            description: t("Renault.tabs.profitability.features.renaultC6x4Desc")
          },
          {
            image: "/serie-c/Profitability-7.png",
            title: t("Renault.tabs.profitability.features.dxiEngines"),
            description: t("Renault.tabs.profitability.features.dxiEnginesDesc")
          },
          {
            image: "/serie-c/Profitability-8.png",
            title: t("Renault.tabs.profitability.features.optidriverGearbox"),
            description: t("Renault.tabs.profitability.features.optidriverGearboxDesc")
          },
          {
            image: "/serie-c/Profitability-9.png",
            title: t("Renault.tabs.profitability.features.offRoadMode"),
            description: t("Renault.tabs.profitability.features.offRoadModeDesc")
          },
          {
            image: "/serie-c/Profitability-10.png",
            title: t("Renault.tabs.profitability.features.powerMode"),
            description: t("Renault.tabs.profitability.features.powerModeDesc")
          }
        ]
      },
      solutions: {
        title: t("Renault.tabs.solutions.title"),
        subtitle: t("Renault.tabs.solutions.subtitleC"),
        description: t("Renault.tabs.solutions.descriptionC"),
        images: [
          "/serie-c/solution-1.jpg",
          "/serie-c/solution-2.jpg",
          "/serie-c/solution-3.jpg"
        ]
      }
    },
    D: {
      robustness: {
        title: t("Renault.tabs.robustness.title"),
        subtitle: t("Renault.tabs.robustness.subtitleD"),
        description: t("Renault.tabs.robustness.descriptionD"),
        features: [
          {
            image: "/serie-d/Robust-1.jpg",
            title: t("Renault.tabs.robustness.features.steelBumper"),
            description: t("Renault.tabs.robustness.features.steelBumperDescD")
          },
          {
            image: "/serie-d/Robust-2.jpg",
            title: t("Renault.tabs.robustness.features.threePartBumper"),
            description: t("Renault.tabs.robustness.features.threePartBumperDesc")
          },
          {
            image: "/serie-d/Robust-3.jpg",
            title: t("Renault.tabs.robustness.features.chassisAirSuspension"),
            description: t("Renault.tabs.robustness.features.chassisAirSuspensionDesc")
          },
          {
            image: "/serie-d/Robust-4.jpg",
            title: t("Renault.tabs.robustness.features.chassisSideMembers"),
            description: t("Renault.tabs.robustness.features.chassisSideMembersDesc")
          },
          {
            image: "/serie-d/Robust-5.jpg",
            title: t("Renault.tabs.robustness.features.reducedCabWidth"),
            description: t("Renault.tabs.robustness.features.reducedCabWidthDesc")
          },
          {
            image: "/serie-d/Robust-6.jpg",
            title: t("Renault.tabs.robustness.features.reducedTurningCircle"),
            description: t("Renault.tabs.robustness.features.reducedTurningCircleDesc")
          }
        ]
      },
      profitability: {
        title: t("Renault.tabs.profitability.title"),
        subtitle: t("Renault.tabs.profitability.subtitleD"),
        description: t("Renault.tabs.profitability.descriptionD"),
        features: [
          {
            image: "/serie-d/Profitability-1.jpg",
            title: t("Renault.tabs.profitability.features.platesBrackets"),
            description: t("Renault.tabs.profitability.features.platesBracketsDesc")
          },
          {
            image: "/serie-d/Profitability-2.jpg",
            title: t("Renault.tabs.profitability.features.extensivePowerTakeoffs"),
            description: t("Renault.tabs.profitability.features.extensivePowerTakeoffsDesc")
          },
          {
            image: "/serie-d/Profitability-3.jpg",
            title: t("Renault.tabs.profitability.features.renaultDCab"),
            description: t("Renault.tabs.profitability.features.renaultDCabDesc")
          },
          {
            image: "/serie-d/Profitability-4.jpg",
            title: t("Renault.tabs.profitability.features.renaultDCabVan"),
            description: t("Renault.tabs.profitability.features.renaultDCabVanDesc")
          },
          {
            image: "/serie-d/Profitability-5.jpg",
            title: t("Renault.tabs.profitability.features.dxi5dxi7Engines"),
            description: t("Renault.tabs.profitability.features.dxi5dxi7EnginesDesc")
          },
          {
            image: "/serie-d/Profitability-6.jpg",
            title: t("Renault.tabs.profitability.features.steelTank"),
            description: t("Renault.tabs.profitability.features.steelTankDesc")
          },
          {
            image: "/serie-d/Profitability-7.jpg",
            title: t("Renault.tabs.profitability.features.aluminumTankLight"),
            description: t("Renault.tabs.profitability.features.aluminumTankLightDesc")
          }
        ]
      },
      comfort: {
        title: t("Renault.tabs.comfort.title"),
        subtitle: t("Renault.tabs.comfort.subtitleD"),
        description: t("Renault.tabs.comfort.descriptionD"),
        features: [
          {
            image: "/serie-d/Comfort-1.jpg",
            title: t("Renault.tabs.comfort.features.easyCabAccess"),
            description: t("Renault.tabs.comfort.features.easyCabAccessDesc")
          },
          {
            image: "/serie-d/Comfort-2.jpg",
            title: t("Renault.tabs.comfort.features.wraparoundDashboard"),
            description: t("Renault.tabs.comfort.features.wraparoundDashboardDesc")
          },
          {
            image: "/serie-d/Comfort-3.jpg",
            title: t("Renault.tabs.comfort.features.comfortableSeats"),
            description: t("Renault.tabs.comfort.features.comfortableSeatsDesc")
          },
          {
            image: "/serie-d/Comfort-4.jpg",
            title: t("Renault.tabs.comfort.features.pneumaticSteering"),
            description: t("Renault.tabs.comfort.features.pneumaticSteeringDesc")
          }
        ]
      },
      solutions: {
        title: t("Renault.tabs.solutions.title"),
        subtitle: t("Renault.tabs.solutions.subtitleD"),
        description: t("Renault.tabs.solutions.descriptionD"),
        images: [
          "/serie-d/solution-1.jpg",
          "/serie-d/solution-2.jpg",
          "/serie-d/solution-3.jpg"
        ]
      }
    },
  };

  // Tab labels
  const tabLabels = {
    robustness: t("Renault.tabs.robustness.label"),
    profitability: t("Renault.tabs.profitability.label"),
    comfort: t("Renault.tabs.comfort.label"),
    solutions: t("Renault.tabs.solutions.title")
  };

  if (!brand || !model) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">{t("Common.brandNotFound")}</p>
      </div>
    );
  }

  const seriesData = tabContent[model.series as keyof typeof tabContent];
  const availableTabs = seriesData ? Object.keys(seriesData) : [];

  const handleDownloadCatalog = (source: string, title: string) => {
    const link = document.createElement('a');
    link.href = source;
    link.download = `${title}.pdf`;
    link.click();
  };

  const renderTabContent = () => {
    const currentTabData = seriesData[activeTab as keyof typeof seriesData];
    
    if (!currentTabData) return null;

    // Check if this is a solutions tab (has images array instead of features)
    const isSolutionsTab = 'images' in currentTabData;

    // Type assertion to fix TypeScript issues
    const tabData = currentTabData as {
      title: string;
      subtitle: string;
      description: string;
      features?: Array<{ image: string; title: string; description: string }>;
      images?: string[];
    };

    return (
      <div className="bg-white rounded-lg p-8">
        {/* Tab Header */}
        <div className="text-center mb-12">
          <Text className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            {tabData.title}
          </Text>
          <Title order={2} className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {tabData.subtitle}
          </Title>
          <Text className="text-gray-700 text-lg max-w-3xl mx-auto">
            {tabData.description}
          </Text>
        </div>

        {/* Content based on tab type */}
        {isSolutionsTab ? (
          // Solutions Tab - Image Grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tabData.images?.map((image: string, index: number) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg bg-gray-100 transition-transform hover:scale-105"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`Solution ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={90}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        ) : (
          // Regular Tabs - Features with descriptions
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {tabData.features?.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Image Container with proper aspect ratio and no cropping */}
                <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
                  <div className="relative" style={{ paddingBottom: '65.5%' }}>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Content Container with Equal Height */}
                <div className="flex flex-col flex-grow mt-4 space-y-2">
                  {/* Title with Primary Color */}
                  <Title 
                    order={3} 
                    className="text-xl font-bold text-primary mb-2 line-clamp-2"
                  >
                    {feature.title}
                  </Title>

                  {/* Description */}
                  <Text className="text-gray-600 flex-grow leading-relaxed">
                    {feature.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Model Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Model Image */}
          <div className="flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={model.image}
              alt={model.name}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Model Information */}
          <div className="space-y-8">
            <div>
              <Title order={1} className="text-3xl font-bold text-gray-900 mb-6">
                {t("Renault.seriesTitle", { series: model.series })}
              </Title>

              {/* Models Section - Moved to top */}
              {model.models && model.models.length > 0 && (
                <div className="mb-8">
                  <Text className="text-lg font-semibold text-gray-900 mb-3">
                    {t("Renault.models")}
                  </Text>
                  <div className="space-y-2">
                    {model.models.map((modelName, index) => (
                      <Text key={index} className="text-gray-700">
                        {modelName}
                      </Text>
                    ))}
                  </div>
                </div>
              )}

              {/* Engines Section */}
              <div className="mb-8">
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  {t("Renault.engines")}
                </Text>
                <div className="space-y-2">
                  {model.engines.map((engine, index) => (
                    <Text key={index} className="text-gray-700">
                      {engine}
                    </Text>
                  ))}
                </div>
              </div>

              {/* GVW Section */}
              <div className="mb-8">
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                  {t("Renault.gvw")}
                </Text>
                <Text className="text-gray-700">
                  {model.gvw}
                </Text>
              </div>

              {/* GCW Section - Conditionally rendered */}
              {model.gcw && (
                <div className="mb-8">
                  <Text className="text-lg font-semibold text-gray-900 mb-3">
                    {t("Renault.gcw")}
                  </Text>
                  <Text className="text-gray-700">
                    {model.gcw}
                  </Text>
                </div>
              )}

              {/* Business Section - Conditionally rendered */}
              {model.business && model.business.length > 0 && (
                <div className="mb-8">
                  <Text className="text-lg font-semibold text-gray-900 mb-3">
                    {t("Renault.business")}
                  </Text>
                  <div className="space-y-2">
                    {model.business.map((businessLine, index) => (
                      <Text key={index} className="text-gray-700">
                        {businessLine}
                      </Text>
                    ))}
                  </div>
                </div>
              )}

              {/* Cabines Section */}
              <div className="mb-8">
                <Text className="text-lg font-semibold text-gray-900 mb-3">
                    {t("Renault.cabins")}
                  </Text>
                <div className="space-y-2">
                  {model.cabines.map((cabin, index) => (
                    <Text key={index} className="text-gray-700">
                      {cabin}
                    </Text>
                  ))}
                </div>
              </div>

              {/* Download Catalog Buttons */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  {model.catalogPdf && model.catalogPdf.map((catalog, index) => (
                    <Button
                      key={index}
                      onClick={() => handleDownloadCatalog(catalog.source, t(catalog.title))}
                      className="bg-primary hover:bg-primary w-full justify-start text-white"
                      size="lg"
                    >
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t(catalog.title)}
                    </Button>
                  ))}
                  {(!model.catalogPdf || model.catalogPdf.length === 0) && (
                    <Text className="text-gray-500 italic">
                      No catalogs available for this model.
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Static Information Tabs Section */}
      {seriesData && availableTabs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
            {/* Tabs Navigation */}
            <div className="flex justify-evenly space-x-1 mb-12">
              {Object.entries(tabLabels).map(([tabKey, tabLabel]) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${activeTab === tabKey
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } ${availableTabs.includes(tabKey) ? '' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!availableTabs.includes(tabKey)}
                >
                  {tabLabel}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {renderTabContent()}
          </div>
        </section>
      )}
    </div>
  );
};

export default ModelDetailPage;