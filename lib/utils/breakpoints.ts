// @ts-ignore
import { theme } from '@/lib/utils/tailwindcss';

export function isMobile() {
  return window.matchMedia("(max-width: 639px)").matches;
}

export function isBreakpointMin(breakpoint: string) {
  return window.matchMedia("(min-width:" + theme.screens[breakpoint] + ")").matches
}

export function onDesktop(vue: Vue, callback: (e: UIEvent) => void): void {
  const handler = (e: UIEvent): void => {
    if ((window.innerWidth || document.documentElement.clientWidth) >= 1280) {
      callback(e);
    }
  };

  window.addEventListener('resize', handler, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', handler, false);
  })
}

export function onMobile(vue: Vue, callback: (e: UIEvent) => void): void {
  const handler = (e: UIEvent): void => {
    if ((window.innerWidth || document.documentElement.clientWidth) >= 1280) {
      callback(e);
    }
  };

  window.addEventListener('resize', handler, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', handler, false);
  })
}

export function onResize(vue: Vue, callback: (e: UIEvent) => void): void {
  const handler = (e: UIEvent): void => {
    callback(e);
  };

  window.addEventListener('resize', handler, false);

  vue.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', handler, false);
  })
}

export function useBreakpoint(): string {
  if (window.matchMedia("(max-width:" + theme.screens['sm'] + ")").matches) {
    return 'sm';
  }
  if (window.matchMedia("(max-width:" + theme.screens['md'] + ")").matches) {
    return 'md';
  }
  if (window.matchMedia("(max-width:" + theme.screens['lg'] + ")").matches) {
    return 'lg';
  }
  return 'xl';
}
