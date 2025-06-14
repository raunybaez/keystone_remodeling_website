declare module 'react-google-recaptcha' {
  import * as React from 'react';
  
  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    grecaptcha?: any;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact' | 'invisible';
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    hl?: string;
  }
  
  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): Promise<string>;
    executeAsync(): Promise<string>;
    getResponse(): string | null;
  }
}
