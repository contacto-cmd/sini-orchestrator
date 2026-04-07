// HEISEN-MATRIX-05 License System Implementation

class LicenseSystem {
    constructor() {
        this.totalPortfolioValue = 175000;
        this.tokenBreakdown = {
            'HEISEN-MATRIX-05': 75000,
            'QUANTUM-LOOP-06': 40000,
            'AETHER-TORUS-01': 25000,
            'ENTROPY-BRAID-03': 35000,
        };
        this.licenses = Object.keys(this.tokenBreakdown);
    }

    validateToken(token) {
        return this.licenses.includes(token);
    }

    getPortfolioValue() {
        return this.totalPortfolioValue;
    }

    getTokenValue(token) {
        return this.tokenBreakdown[token] || 0;
    }

    checkLicenseStatus(token) {
        if (this.validateToken(token)) {
            return `${token} is valid. Value: $${this.getTokenValue(token)}`;
        } else {
            return `${token} is invalid.`;
        }
    }
}

// Example Usage:
const licenseSystem = new LicenseSystem();
console.log(licenseSystem.checkLicenseStatus('HEISEN-MATRIX-05')); // HEISEN-MATRIX-05 is valid. Value: $75000
console.log(licenseSystem.checkLicenseStatus('INVALID-TOKEN')); // INVALID-TOKEN is invalid.