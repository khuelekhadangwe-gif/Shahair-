/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WigProduct, Review } from './types';
// @ts-ignore
import bestSeller1Img from './assets/images/regenerated_image_1782506360078.jpg';
// @ts-ignore
import bestSeller2Img from './assets/images/regenerated_image_1782506361122.avif';
// @ts-ignore
import pretoriaPearlImg from './assets/images/regenerated_image_1782506537844.avif';
// @ts-ignore
import roseGoldGoddessImg from './assets/images/regenerated_image_1782506539764.avif';

export const WIG_PRODUCTS: WigProduct[] = [
  {
    id: '1',
    name: 'Midnight Elegance',
    category: 'lace-front',
    styleName: 'Long Straight Lace Front',
    length: 24,
    hairType: '100% Human Hair',
    color: 'Natural Black',
    price: 3500,
    image: bestSeller1Img,
    badge: 'Best Seller',
    density: '180%',
    description: 'A timeless statement of simple luxury. Handpicked for premium silkiness, this 24-inch natural black straight wig features an ultra-thin HD lace front that melts seamlessly into any skin tone, giving you full styling freedom.'
  },
  {
    id: '2',
    name: 'Pretoria Pearl',
    category: 'lace-front',
    styleName: 'Body Wave Lace Front',
    length: 18,
    hairType: 'Virgin Human Hair',
    color: 'Natural Brown',
    price: 3200,
    image: pretoriaPearlImg,
    badge: 'Popular',
    density: '150%',
    description: 'Unleash elegant volume with the Pretoria Pearl. Perfect bounce and luxury waves characterize this body wave wig. Hand-crafted using pristine Virgin Human Hair, it holds curls phenomenally well and maintains high-shine luster.'
  },
  {
    id: '3',
    name: 'Kruger Kiss',
    category: 'closure',
    styleName: 'Loose Curls Closure',
    length: 16,
    hairType: '100% Remy Hair',
    color: 'Dark Brown',
    price: 2900,
    image: bestSeller2Img,
    badge: 'Highly Rated',
    density: '180%',
    description: 'Soft, bouncy, and highly defined. Kruger Kiss offers beautiful loose curls with the simple protection of an premium 4x4 lace closure. Easy to wear tape-free/glue-less. Created in a gorgeous, warm dark brown shade.'
  },
  {
    id: '4',
    name: 'Rose Gold Goddess',
    category: 'lace-front',
    styleName: 'Curly Lace Front',
    length: 20,
    hairType: 'Premium Remy Hair',
    color: 'Honey Brown',
    price: 4200,
    image: roseGoldGoddessImg,
    badge: 'New Arrival',
    density: '200%',
    description: 'Make heads turn with dense, gorgeous curls in a stunning Honey Brown. Designed with a deep 13x6 HD lace frontal for gorgeous deep parting possibilities, the Rose Gold Goddess offers breathtaking volume and elite soft texture.'
  },
  {
    id: '5',
    name: 'Savannah Sun',
    category: 'lace-front',
    styleName: 'Honey Blonde Straight',
    length: 22,
    hairType: 'Pristine Human Hair',
    color: 'Honey Blonde',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1595959183075-c1d09e57adbc?w=600&auto=format&fit=crop&q=80',
    badge: 'New Trend',
    density: '180%',
    description: 'Warm, sun-kissed blonde locks that shine. Savannah Sun has been professionally pre-lightened to a gorgeous, natural honey blonde. Featuring a full-cuticle layout for sleek, tangle-free styling, flat ironing, or waving.'
  },
  {
    id: '6',
    name: 'Joburg Glam',
    category: 'short',
    styleName: 'Textured Pixie Cut',
    length: 4,
    hairType: '100% Remy Hair',
    color: 'Dark Auburn',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600&auto=format&fit=crop&q=80',
    badge: 'Bold Stylist',
    density: '150%',
    description: 'Chic, feather-light, and entirely effortlessly. The Joburg Glam pixie cut introduces a vibrant auburn undertone that adds instant warmth to your face. Ready-to-wear, completely glue-less, and incredibly low-maintenance.'
  },
  {
    id: '7',
    name: 'Cape Town Chic',
    category: 'closure',
    styleName: 'Sleek Bob Closure',
    length: 12,
    hairType: 'Elite Virgin Hair',
    color: 'Jet Black',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1512413313708-31676dfb482e?w=600&auto=format&fit=crop&q=80',
    badge: 'Sleek Look',
    density: '150%',
    description: 'A sharp, modern, asymmetrical blunt bob that exudes confidence. Made with premium Virgin Hair colored to deep Jet Black. Designed with a pre-plucked parting closure to give you the most natural flat hairline instantly.'
  },
  {
    id: '8',
    name: 'Velvet Night',
    category: '360',
    styleName: 'Deep Wave 360',
    length: 26,
    hairType: '100% Remy Hair',
    color: 'Off Black',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80',
    badge: 'Gala Collection',
    density: '200%',
    description: 'Experience ultimate styling mobility. With our 360-degree lace system, you can wear this stunning 26-inch deep wave hair in a high ponytail, top-knot, or elegant bun with absolute confidence that the hairline is completely undetectable.'
  },
  {
    id: '9',
    name: 'Sunset Strip',
    category: 'lace-front',
    styleName: 'Long Wavy Lace Front',
    length: 24,
    hairType: 'Virgin Human Hair',
    color: 'Highlights',
    price: 3700,
    image: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=600&auto=format&fit=crop&q=80',
    badge: 'Highly Requested',
    density: '185%',
    description: 'Featuring sophisticated, hand-painted caramel and blonde highlight face-framing strips. The Sunset Strip offers beach wave volume with beautiful multi-dimensional depth. A must-have for summer events and date nights.'
  },
  {
    id: '10',
    name: 'Coastal Breeze',
    category: 'lace-front',
    styleName: 'Ocean Wave',
    length: 22,
    hairType: 'Premium Human Hair',
    color: 'Medium Brown',
    price: 3400,
    image: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=600&auto=format&fit=crop&q=80',
    density: '180%',
    description: 'A relaxed, flowy wave pattern that bounces back effortlessly. This gorgeous medium-brown lace front is pre-styled to natural sea-breeze beach waves that maintain structure even after washing.'
  },
  {
    id: '11',
    name: 'Wine Country',
    category: 'lace-front',
    styleName: 'Burgundy Deep Wave',
    length: 24,
    hairType: 'Virgin Hair',
    color: 'Burgundy Wine',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1618679078696-29177a2efaf3?w=600&auto=format&fit=crop&q=80',
    badge: 'Crown Select',
    density: '180%',
    description: 'Envelop yourself in the richness of fine burgundy. Professionally dyed with a deep red wine-wood tone, this premium hair is soft to touch, highly vibrant, and retains deep-wave definitions beautifully.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Naledi M.',
    location: 'Sandton, JHB',
    rating: 5,
    text: 'I ordered the Midnight Elegance 24\". Absolutely incredible! The hair is so soft, does not tangle at all, and the HD lace literally disappeared on my forehead. Everyone asks where I got my hair done!',
    wigModel: 'Midnight Elegance',
    date: '1 week ago'
  },
  {
    id: 'r2',
    name: 'Zama K.',
    location: 'Durban North',
    rating: 5,
    text: 'Shahair is the real deal! Ordering via WhatsApp was incredibly fast and sweet. Placed my order on Tuesday, got it via Courier Guy in Durban by Thursday morning. The Pretoria Pearl body waves are beautiful.',
    wigModel: 'Pretoria Pearl',
    date: '2 weeks ago'
  },
  {
    id: 'r3',
    name: 'Lerato S.',
    location: 'Pretoria East',
    rating: 5,
    text: 'Extremely professional customer care. I used the online interactive tool to customize a 20\" Honey Blonde straight look, clicked order, was responded on WhatsApp in 5 minutes! Definitely buying a closure bob next.',
    wigModel: 'Custom Honey Blonde',
    date: '1 month ago'
  },
  {
    id: 'r4',
    name: 'Chantel v. d. M.',
    location: 'Cape Town City',
    rating: 5,
    text: 'The Bob wig Cape Town Chic is literally perfect. High quality density, smells premium, and completely pre-plucked. Glue-less wear is so comfortable.',
    wigModel: 'Cape Town Chic',
    date: '3 weeks ago'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 'Step 1',
    title: 'Browse & Choose',
    description: 'Explore our curated catalog of elite handpicked wigs. Use custom category filters, look at the detailed pictures, and find your crown.'
  },
  {
    step: 'Step 2',
    title: 'Customize Your Look',
    description: 'Use our boutique Wig Customizer to pick your choice of Length, Style, Hair Type, and Color. Our system instantly estimates your premium quote.'
  },
  {
    step: 'Step 3',
    title: 'Confirm via WhatsApp',
    description: 'Send your customized selection strings directly with one tap to our beauty consultants on WhatsApp. We answer in minutes to assist with queries.'
  },
  {
    step: 'Step 4',
    title: 'Express Courier Delivery',
    description: 'Once Payment is verified via EFT or secure link, we carefully package your order. We deliver secure and door-to-door nationwide in 2-5 days.'
  }
];
