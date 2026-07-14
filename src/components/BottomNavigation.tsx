const items = [
  { href: "#/", route: "home", label: "홈" },
  { href: "#/day1", route: "day1", label: "DAY1" },
  { href: "#/day2", route: "day2", label: "DAY2" },
  { href: "#/day3", route: "day3", label: "DAY3" },
  { href: "#/photos", route: "photos", label: "사진", visible: false },
];

type BottomNavigationProps = {
  currentRoute: string;
  limited?: boolean;
};

export function BottomNavigation({ currentRoute, limited = false }: BottomNavigationProps) {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {items.filter((item) => item.visible !== false && (!limited || item.route === "home")).map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={currentRoute === item.route ? "is-active" : undefined}
          aria-current={currentRoute === item.route ? "page" : undefined}
          aria-label={`${item.label} 페이지로 이동`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
