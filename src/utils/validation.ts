import { ValidationRule, ValidationError } from '@/types';

export class ValidationService {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone);
  }

  static validateRequired(value: any): boolean {
    return value !== null && value !== undefined && value.toString().trim() !== '';
  }

  static validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  static validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  static validatePattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }

  static validateField(field: string, value: any, rule: ValidationRule): ValidationError | null {
    if (rule.required && !this.validateRequired(value)) {
      return { field, message: `${field} is required` };
    }

    if (rule.minLength && value && !this.validateMinLength(value, rule.minLength)) {
      return { field, message: `${field} must be at least ${rule.minLength} characters` };
    }

    if (rule.maxLength && value && !this.validateMaxLength(value, rule.maxLength)) {
      return { field, message: `${field} must be no more than ${rule.maxLength} characters` };
    }

    if (rule.pattern && value && !this.validatePattern(value, rule.pattern)) {
      return { field, message: `${field} format is invalid` };
    }

    if (rule.custom && !rule.custom(value)) {
      return { field, message: `${field} is invalid` };
    }

    return null;
  }
}
