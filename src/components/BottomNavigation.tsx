const items = [
  { href: "#home", label: "홈", icon: "⌂" },
  { href: "#about", label: "안내", icon: "i" },
  { href: "#day1", label: "7/16", icon: "1" },
  { href: "#day2", label: "7/17", icon: "2" },
  { href: "#photos", label: "사진", icon: "□" },
];

export function BottomNavigation() {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {items.map((item) => (
        <a key={item.href} href={item.href} aria-label={`${item.label} 섹션으로 이동`}>
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
