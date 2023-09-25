const mapping: Record<string, string> = {
  businesses: 'business',
  customers: 'customer',
  finances: 'finance',
  payments: 'payment',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
