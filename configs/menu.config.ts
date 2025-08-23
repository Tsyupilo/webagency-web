import type { MenuLang } from "./site.config";

type MenuHeadings = {
	website: MenuLang;
	blog: MenuLang;
};

type MenuItem = {
	href: string;
	label: MenuLang;
};

type Menu = Record<string, MenuItem>;

type MenuContent = {
	categories: MenuItem;
	tags: MenuItem;
	authors: MenuItem;
};

export const menuHeadings: MenuHeadings = {
	website: {
		en: "Website",
		ru: "Сайт",
	},
	blog: {
		en: "Blog",
		ru: "Блог",
	},
};

export const mainMenu: Menu = {
	home: {
		href: "/",
		label: {
			en: "Home",
			ru: "Главная",
		},
	},
	about: {
		href: "/about",
		label: {
			en: "About",
			ru: "О нас",
		},
	},
	blog: {
		href: "/posts",
		label: {
			en: "Blog",
			ru: "Блог",
		},
	},
};

export const contentMenu: MenuContent = {
	categories: {
		href: "/posts/categories",
		label: {
			en: "Categories",
			ru: "Категории",
		},
	},
	tags: {
		href: "/posts/tags",
		label: {
			en: "Tags",
			ru: "Теги",
		},
	},
	authors: {
		href: "/posts/authors",
		label: {
			en: "Authors",
			ru: "Авторы",
		},
	},
};
