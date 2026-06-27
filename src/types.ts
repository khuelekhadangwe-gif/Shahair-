/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type LaceType = 'lace-front' | 'closure' | '360' | 'wig' | 'short';

export interface WigProduct {
  id: string;
  name: string;
  category: LaceType;
  styleName: string;
  length: number; // inches, e.g. 12, 16, 18, 20, 22, 24, 26
  hairType: string; // e.g. "Human Hair", "Remy Hair", "Virgin Hair"
  color: string; // e.g. "Natural Black", "Honey Blonde", etc.
  price: number; // in ZAR, e.g. 3500
  image: string; // url or placeholder
  badge?: string; // e.g. "Best Seller", "New Arrival", "Premium"
  description: string;
  density?: string; // e.g. "150%", "180%", "200%"
}

export interface CustomWigSelection {
  style: string;
  length: number;
  color: string;
  laceType: string;
  density: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  wigModel: string;
  date: string;
}
