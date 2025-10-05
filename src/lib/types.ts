import type { Asset, Entry, EntryFields, EntrySkeletonType } from "contentful";

// Icon Props Interface
export interface IIconProps {
    className?: string;
}

// Pillar Types (define first since it's referenced by others)
export interface TypePillarFields {
    title: string;
    description: string;
    iconName?: "Charity" | "Cross" | "People";
    order?: number;
}

export interface TypePillarSkeleton extends EntrySkeletonType {
    contentTypeId: "pillar";
    fields: TypePillarFields;
}

export type TypePillar = Entry<TypePillarSkeleton>;

// Meeting Time Types
export interface TypeMeetingTimeFields {
    eventName: string;
    day: string;
    time: string;
    description?: string;
}

export interface TypeMeetingTimeSkeleton extends EntrySkeletonType {
    contentTypeId: "meetingTime";
    fields: TypeMeetingTimeFields;
}

export type TypeMeetingTime = Entry<TypeMeetingTimeSkeleton>;

// About Section Types
export interface TypeAboutSectionFields {
    title: string;
    description?: string;
    pillars?: Entry<TypePillarSkeleton>[];
}

export interface TypeAboutSectionSkeleton extends EntrySkeletonType {
    contentTypeId: "aboutSection";
    fields: TypeAboutSectionFields;
}

export type TypeAboutSection = Entry<TypeAboutSectionSkeleton>;

// Contact Information Types
export interface TypeContactInformationFields {
    address?: string;
    email?: string;
    phone?: string;
    meetingTimes?: Entry<TypeMeetingTimeSkeleton>[];
}

export interface TypeContactInformationSkeleton extends EntrySkeletonType {
    contentTypeId: "contactInformation";
    fields: TypeContactInformationFields;
}

export type TypeContactInformation = Entry<TypeContactInformationSkeleton>;

// Event Types
export interface TypeEventFields {
    title: string;
    description: string;
    timing: string;
    location: string;
    featuredImage: Asset;
    date?: string;
    registrationButtonLink?: string;
    registrationButtonText?: string;
    eventType?: "Meeting" | "Other" | "Retreat" | "Service";
    isFeatured?: boolean;
}

export interface TypeEventSkeleton extends EntrySkeletonType {
    contentTypeId: "event";
    fields: TypeEventFields;
}

export type TypeEvent = Entry<TypeEventSkeleton>;

// Hero Section Types
export interface TypeHeroSectionFields {
    heading: string;
    subheading?: string;
    description?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    logo?: Asset;
}

export interface TypeHeroSectionSkeleton extends EntrySkeletonType {
    contentTypeId: "heroSection";
    fields: TypeHeroSectionFields;
}

export type TypeHeroSection = Entry<TypeHeroSectionSkeleton>;

// Membership Step Types
export interface TypeMembershipStepFields {
    stepNumber: number;
    title: string;
    description?: string;
    icon?: string;
}

export interface TypeMembershipStepSkeleton extends EntrySkeletonType {
    contentTypeId: "membershipStep";
    fields: TypeMembershipStepFields;
}

export type TypeMembershipStep = Entry<TypeMembershipStepSkeleton>;

// Mission Statement Types
export interface TypeMissionStatementFields {
    title: string;
    content: any; // Rich text content
    ctaText?: string;
    ctaLink?: string;
    featuredImage: Asset;
}

export interface TypeMissionStatementSkeleton extends EntrySkeletonType {
    contentTypeId: "missionStatement";
    fields: TypeMissionStatementFields;
}

export type TypeMissionStatement = Entry<TypeMissionStatementSkeleton>;

// List Section Types
export interface TypeListSectionFields {
    title: string;
    content: any; // Rich text content
    ctaText?: string;
    ctaLink?: string;
    listItems?: Entry<TypeEventSkeleton | TypeMeetingTimeSkeleton | TypeMembershipStepSkeleton | TypePillarSkeleton>[];
    theme: "Dark" | "Light";
}

export interface TypeListSectionSkeleton extends EntrySkeletonType {
    contentTypeId: "listSection";
    fields: TypeListSectionFields;
}

export type TypeListSection = Entry<TypeListSectionSkeleton>;

// Navigation Types
export interface TypeNavigationFields {
    label: string;
    link: string;
    order: number;
    isExternal?: boolean;
}

export interface TypeNavigationSkeleton extends EntrySkeletonType {
    contentTypeId: "navigation";
    fields: TypeNavigationFields;
}

export type TypeNavigation = Entry<TypeNavigationSkeleton>;

export interface TypeFooterDataFields {
    showNewsletterForm?: EntryFields.Boolean;
    facebookLink?: EntryFields.Symbol;
    instagramLink?: EntryFields.Symbol;
    twitterLink?: EntryFields.Symbol;
    linkedinLink?: EntryFields.Symbol;
    showQuickLinks?: EntryFields.Boolean;
}

export interface TypeFooterDataSkeleton extends EntrySkeletonType {
    contentTypeId: "footerData";
    fields: TypeFooterDataFields;
}

export type TypeFooterData = Entry<TypeFooterDataSkeleton>;

// Page Types
export interface TypePageFields {
    title: string;
    slug: string;
    metaDescription?: string;
    heroSection?: Entry<TypeHeroSectionSkeleton>;
    sections?: Entry<TypeAboutSectionSkeleton | TypeContactInformationSkeleton | TypeListSectionSkeleton | TypeMissionStatementSkeleton | TypeNavigationSkeleton>[];
    aboutSection?: Entry<TypeAboutSectionSkeleton>;
    missionSection?: Entry<TypeMissionStatementSkeleton>;
    eventSection?: Entry<TypeListSectionSkeleton>;
    joinSection?: Entry<TypeListSectionSkeleton>;
    contactSection?: Entry<TypeContactInformationSkeleton>;
}

export interface TypePageSkeleton extends EntrySkeletonType {
    contentTypeId: "page";
    fields: TypePageFields;
}

export type TypePage = Entry<TypePageSkeleton>;

// Site Settings Types
export interface TypeSiteSettingsFields {
    siteTitle?: string;
    siteDescription?: string;
    logo?: Asset;
    primaryColor?: string;
    secondaryColor?: string;
    socialMediaLinks?: any; // JSON object
    footerText?: string;
    newsletterSignupText?: string;
}

export interface TypeSiteSettingsSkeleton extends EntrySkeletonType {
    contentTypeId: "siteSettings";
    fields: TypeSiteSettingsFields;
}

export type TypeSiteSettings = Entry<TypeSiteSettingsSkeleton>;