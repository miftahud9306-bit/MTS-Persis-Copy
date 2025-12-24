import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SchoolStats {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface Teacher {
  name: string;
  role: string;
  image: string;
}