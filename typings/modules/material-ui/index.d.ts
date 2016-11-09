/// <reference types="react" />

declare namespace __MaterialUI {
  namespace BottomNavigation {
    interface BottomNavigationProps {
      selectedIndex?: number;
      className?: string;
      style?: React.CSSProperties;
    }

    export class BottomNavigation extends React.Component<BottomNavigationProps, {}> { }

    interface BottomNavigationItemProps extends SharedEnhancedButtonProps<BottomNavigationItem> {
      label?: string;
      icon?: any;
      className?: string;
    }

    export class BottomNavigationItem extends React.Component<BottomNavigationItemProps, {}> { }
  }
}

declare module "material-ui" {
  export import BottomNavigation = __MaterialUI.BottomNavigation.BottomNavigation;
  export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
}

declare module 'material-ui/BottomNavigation' {
  export import BottomNavigation = __MaterialUI.BottomNavigation.BottomNavigation;
  export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
  export default BottomNavigation;
}

declare module 'material-ui/BottomNavigation/BottomNavigationItem' {
  export import BottomNavigationItem = __MaterialUI.BottomNavigation.BottomNavigationItem;
  export default BottomNavigationItem;
}