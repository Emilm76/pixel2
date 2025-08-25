declare module "use-react-screenshot" {
  export function useScreenshot(options?: {
    type?: string
    quality?: number
  }): [string | null, (node: HTMLElement | null) => Promise<string | null>]

  export function createFileName(extension: string, name: string): string
}
