import { useState, useEffect } from 'react';
import { DEFAULT_SERIALIZABLE_MENUS, ICON_MAP } from '../constants.js';
import { FeatureMenu } from '../types.js';
import { HelpCircle } from 'lucide-react';

interface SerializableFeatureMenu {
  title: string;
  description: string;
  iconName: string;
  href: string;
  isExternal?: boolean;
}

const LOCAL_STORAGE_KEY = 'artsgoz_quick_access';

export function useQuickAccess() {
  const [menus, setMenus] = useState<FeatureMenu[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    let loadedMenus: SerializableFeatureMenu[] = [];
    if (saved) {
      try {
        loadedMenus = JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse quick access menus from localStorage', e);
      }
    }
    
    if (!loadedMenus || loadedMenus.length === 0) {
      loadedMenus = DEFAULT_SERIALIZABLE_MENUS;
    }

    // Map serializable menus to FeatureMenu (resolve icons)
    const resolvedMenus: FeatureMenu[] = loadedMenus.map((m) => ({
      title: m.title,
      description: m.description,
      icon: ICON_MAP[m.iconName] || HelpCircle,
      href: m.href,
      iconName: m.iconName,
      isExternal: m.isExternal
    } as any));

    setMenus(resolvedMenus);
  }, []);

  const saveMenus = (newMenus: FeatureMenu[]) => {
    const serializable: SerializableFeatureMenu[] = newMenus.map((m: any) => ({
      title: m.title,
      description: m.description,
      iconName: m.iconName || 'Link2',
      href: m.href,
      isExternal: m.isExternal
    }));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serializable));
    setMenus(newMenus);
  };

  const addMenu = (newMenu: { title: string; description: string; iconName: string; href: string; isExternal?: boolean }) => {
    const resolved: FeatureMenu = {
      title: newMenu.title,
      description: newMenu.description,
      icon: ICON_MAP[newMenu.iconName] || HelpCircle,
      href: newMenu.href,
      iconName: newMenu.iconName,
      isExternal: newMenu.isExternal
    } as any;

    const updated = [...menus, resolved];
    saveMenus(updated);
  };

  const deleteMenu = (indexToDelete: number) => {
    const updated = menus.filter((_, idx) => idx !== indexToDelete);
    saveMenus(updated);
  };

  const resetMenus = () => {
    const resolved = DEFAULT_SERIALIZABLE_MENUS.map((m) => ({
      title: m.title,
      description: m.description,
      icon: ICON_MAP[m.iconName] || HelpCircle,
      href: m.href,
      iconName: m.iconName
    } as any));
    saveMenus(resolved);
  };

  return {
    menus,
    addMenu,
    deleteMenu,
    resetMenus
  };
}
