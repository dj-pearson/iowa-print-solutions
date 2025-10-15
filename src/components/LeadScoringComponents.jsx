import React from 'react';

export const useLeadScoring = () => {
  return {
    leadScore: 0,
    engagementLevel: 'cold',
    userProfile: {
      visitCount: 0,
      pagesViewed: [],
      timeOnSite: 0,
      interactions: [],
      lastVisit: null,
      interests: []
    },
    addPageView: () => {},
    addInteraction: () => {},
    addTimeSpent: () => {},
    getLeadQuality: () => 'New Visitor',
    personalizedMessage: 'Welcome to Iowa Print Solutions',
    shouldShowAggressiveCTA: false
  };
};

export const SmartLeadCTA = ({ children, className = "", variant = "primary", size = "md" }) => {
  const baseClasses = "font-semibold transition-colors inline-block text-center";
  const variantClasses = variant === "primary" 
    ? "bg-blue-600 hover:bg-blue-700 text-white" 
    : "bg-gray-600 hover:bg-gray-700 text-white";
  const sizeClasses = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3";
  
  return (
    <div className={`${baseClasses} ${variantClasses} ${sizeClasses} rounded-lg ${className}`}>
      {children || "Learn More"}
    </div>
  );
};

export const BehaviorTrigger = ({ children }) => {
  return <>{children}</>;
};