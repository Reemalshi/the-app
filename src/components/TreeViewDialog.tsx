import React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { styled, alpha } from '@mui/material/styles';
import { Sector } from '../types/Sector';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.grey[800]
      : theme.palette.grey[200],

  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: '50%',
    backgroundColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.primary.main, 0.25)
        : theme.palette.primary.dark,
    color: theme.palette.mode === 'dark' && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

interface TreeViewDialogProps {
  open: boolean;
  onClose: () => void;
  sector: Sector;
}

const TreeViewDialog: React.FC<TreeViewDialogProps> = ({ open, onClose, sector }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box sx={{ minHeight: 600, minWidth: 550, padding: 2 }}>
        <SimpleTreeView
          defaultExpandedItems={['sector-name']}
          slots={{
            expandIcon: AddBoxIcon,
            collapseIcon: IndeterminateCheckBoxIcon,
          }}
        >
          <CustomTreeItem itemId="sector-name" label={sector.name}>
            <CustomTreeItem itemId="category" label="Category">
              {sector.category.map((cat, index) => (
                <CustomTreeItem key={index} itemId={`category-${index}`} label={cat} />
              ))}
            </CustomTreeItem>
            <CustomTreeItem itemId="field" label="Field">
              {sector.field.map((field, index) => (
                <CustomTreeItem key={index} itemId={`field-${index}`} label={field} />
              ))}
            </CustomTreeItem>
            <CustomTreeItem itemId="subCategory" label="Sub Category">
              {sector.subCategory.map((subCat, index) => (
                <CustomTreeItem key={index} itemId={`subCategory-${index}`} label={subCat} />
              ))}
            </CustomTreeItem>
            <CustomTreeItem itemId="division" label="Division">
              {sector.division.map((division, index) => (
                <CustomTreeItem key={index} itemId={`division-${index}`} label={division} />
              ))}
            </CustomTreeItem>
            <CustomTreeItem itemId="subDivision" label="Sub Division">
              {sector.subDivision.map((subDivision, index) => (
                <CustomTreeItem key={index} itemId={`subDivision-${index}`} label={subDivision} />
              ))}
            </CustomTreeItem>
          </CustomTreeItem>
        </SimpleTreeView>
      </Box>
    </Dialog>
  );
};

export default TreeViewDialog;
