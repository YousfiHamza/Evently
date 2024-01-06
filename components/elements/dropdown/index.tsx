'use client';
import { startTransition, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { ICategory } from '@/lib/database/models/category.model';

import { DropdownProps } from './types';

export function Dropdown({ onChangeHandler, value }: DropdownProps) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newcategory, setNewCategory] = useState('');

  const handleAddCategory = () => {};

  return (
    <div>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories?.length > 0 &&
            categories.map(category => (
              <SelectItem
                key={category.id}
                value={category.id}
                className="select-item p-regular-14"
              >
                {category.name}
              </SelectItem>
            ))}
          <Dialog>
            <DialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
              Open
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>New Category</DialogTitle>
                <DialogDescription>
                  <Input
                    placeholder="Category name"
                    className="input-field mt-3"
                    onChange={e => setNewCategory(e.target.value)}
                  />
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex flex-col gap-2 md:flex-row">
                <Button
                  onClick={() => startTransition(handleAddCategory)}
                  type="button"
                  variant="default"
                >
                  Add
                </Button>
                <DialogClose>
                  <Button
                    className="w-full"
                    type="button"
                    variant="destructive"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </SelectContent>
      </Select>
    </div>
  );
}
