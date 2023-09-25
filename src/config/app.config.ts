interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager', 'End Customer', 'Vendor'],
  tenantName: 'Business',
  applicationName: 'Collectio',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read own information', 'Edit own information', 'Create a payment', 'Read payment information'],
  ownerAbilities: [
    'Manage business information',
    'Manage vendor information',
    'Manage customer information',
    'Manage financial records',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8828b642-04a8-48e9-bc58-73c5e0ccaad4',
};
