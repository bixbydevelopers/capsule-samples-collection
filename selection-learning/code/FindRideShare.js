export default function findRideShare() {
  const standardRideShare = makeRideShare('Standard', 10, 5, 20, 30);
  const poolRideShare = makeRideShare('Pool', 20, 7, 5, 10);
  const deluxeRideShare = makeRideShare('Deluxe', 10, 5, 50, 100);
  const results = [];
  results.push(standardRideShare, poolRideShare, deluxeRideShare);
  return results;
}

function makeRideShare(productType, dropoffETA, pickupETA, priceMin, priceMax) {
  return {
    productType: productType,
    dropoffETA: dropoffETA,
    pickupETA: pickupETA,
    priceRange: {
      min: {
        currencyType: {
          currencyCode: 'USD',
        },
        value: priceMin,
      },
      max: {
        currencyType: {
          currencyCode: 'USD',
        },
        value: priceMax,
      },
    },
  };
}
