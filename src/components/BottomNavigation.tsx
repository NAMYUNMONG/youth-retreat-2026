const items = [
  { href: "#/", route: "home", label: "홈", icon: "⌂" },
  { href: "#/day1", route: "day1", label: "DAY1", icon: "1" },
  { href: "#/day2", route: "day2", label: "DAY2", icon: "2" },
  { href: "#/photos", route: "photos", label: "사진", icon: "□" },
];

type BottomNavigationProps = {
  currentRoute: string;
};

export function BottomNavigation({ currentRoute }: BottomNavigationProps) {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={currentRoute === item.route ? "is-active" : undefined}
          aria-current={currentRoute === item.route ? "page" : undefined}
          aria-label={`${item.label} 페이지로 이동`}
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
