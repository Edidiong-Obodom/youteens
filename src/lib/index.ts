export const randomNumber = () =>
  Math.floor(Math.random() * 9_000_000) + 1_000_000;

export const slideInButtonTransitionParams = {
  duration: 1,
  type: "spring",
  bounce: 0.5,
};

export const handleNavigateToId = (to: string) => {
  const element = document.getElementById(to);
  if (element) {
    element.scrollIntoView();
  }
};
