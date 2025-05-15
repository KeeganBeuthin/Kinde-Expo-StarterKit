// constants/theme.js
export const Colors = {
    light: {
      background: '#f8f9fa',
      card: '#ffffff',
      text: '#000000',
      border: '#e2e8f0',
      primaryButton: '#000000',
      primaryButtonText: '#ffffff',
      secondaryButton: '#f1f5f9',
      secondaryButtonText: '#000000',
      muted: '#64748b',
      fieldLabel: '#f1f5f9',
      fieldLabelText: '#000000',
      fieldValue: '#ffffff',
      fieldValueText: '#334155'
    },
    dark: {
      background: '#000000',
      card: '#0f172a',
      text: '#ffffff',
      border: '#1e293b',
      primaryButton: '#ffffff',
      primaryButtonText: '#000000',
      secondaryButton: '#1e293b',
      secondaryButtonText: '#ffffff',
      muted: '#94a3b8',
      fieldLabel: '#1e293b',
      fieldLabelText: '#ffffff',
      fieldValue: '#000000',
      fieldValueText: '#ffffff'
    }
  };
  
  export const Typography = {
    title: {
      fontSize: 36,
      fontWeight: '600',
      lineHeight: 40,
    },
    subtitle: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
    }
  };
  
  export const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  };
  
  export const BorderRadius = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    rounded: 9999,
  };
  
  export const Shadow = {
    light: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 4,
    }
  };