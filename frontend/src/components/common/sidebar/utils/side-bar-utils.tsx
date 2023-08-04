export class SideBarUtils {
  static menuItemMap: { [key: string]: number } = {
    '/': 0,
    '/tower-info': 1,
    '/all-users': 2,
    '/user-info': 3,
    '/all-appointments': 4,
    '/appointments-with-locator': 5
  };

  public static getActiveTabFromUrl(url: string): number {
    return SideBarUtils.menuItemMap[url] || 0;
  }

  public static getUrlFromActiveTab(activeTab: number): string {
    const url =
      Object.entries(SideBarUtils.menuItemMap).find(([_path, index]) => index === activeTab)?.[0] ||
      '/';
    return url;
  }
}
