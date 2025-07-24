function cn(...classes: (string | false | undefined | null)[]) {
    return classes.filter(Boolean).join(' ');
  }

  export default cn;