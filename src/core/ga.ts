// ----------------------------------------
// main proxy function
function GA(category: string, action: string, label: string): void {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
  });
}

// ----------------------------------------
// list of all events
function click(action: string): void {
  GA('home', 'click', action);
}

function openEmail(): void {
  GA('home', 'open', 'email');
}

function openGithub(): void {
  GA('home', 'open', 'github');
}

function openLinkedin(): void {
  GA('home', 'open', 'linkedin');
}

function openMedium(): void {
  GA('home', 'open', 'medium');
}

function scrollContact(): void {
  GA('home', 'scroll', 'contact');
}

function scrollExperience(): void {
  GA('home', 'scroll', 'experience');
}

function scrollProfile(): void {
  GA('home', 'scroll', 'profile');
}

function scrollTop(): void {
  GA('home', 'scroll', 'top');
}

function toggleMobileMenu(): void {
  GA('home', 'toggle', 'mobile_menu');
}

function urlClick(url: string): void {
  GA('home', 'url', url);
}

export default {
  click,
  openEmail,
  openGithub,
  openLinkedin,
  openMedium,
  scrollContact,
  scrollExperience,
  scrollProfile,
  scrollTop,
  toggleMobileMenu,
  urlClick,
};
