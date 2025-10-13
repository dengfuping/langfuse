import React from "react";
import {
  SplashScreen,
  type ValueProposition,
} from "@/src/components/ui/splash-screen";
import { ThumbsUp, Star, LineChart, Code } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ScoresOnboarding() {
  const { t } = useTranslation();
  const valuePropositions: ValueProposition[] = [
    {
      title: t("score.features.collectUserFeedback.title"),
      description: t("score.features.collectUserFeedback.description"),
      icon: <ThumbsUp className="h-4 w-4" />,
    },
    {
      title: t("score.features.runModelBasedEvaluations.title"),
      description: t("score.features.runModelBasedEvaluations.description"),
      icon: <Star className="h-4 w-4" />,
    },
    {
      title: t("score.features.trackQualityMetrics.title"),
      description: t("score.features.trackQualityMetrics.description"),
      icon: <LineChart className="h-4 w-4" />,
    },
    {
      title: t("score.features.useCustomMetrics.title"),
      description: t("score.features.useCustomMetrics.description"),
      icon: <Code className="h-4 w-4" />,
    },
  ];

  return (
    <SplashScreen
      title={t("score.onboarding.getStartedTitle")}
      description={t("score.onboarding.getStartedDescription")}
      valuePropositions={valuePropositions}
      secondaryAction={{
        label: t("score.onboarding.learnMore"),
        href: "https://langfuse.com/docs/evaluation/evaluation-methods/custom-scores",
      }}
      videoSrc="https://static.langfuse.com/prod-assets/onboarding/scores-overview-v1.mp4"
    />
  );
}
