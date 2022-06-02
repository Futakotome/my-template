import { AxiosInstance, AxiosPromise } from 'axios';

// eslint-disable-next-line import/prefer-default-export
declare enum DML {
  INSERT = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
  SELECT = 'list',
  TREE = 'tree',
  TREE_LAZY = 'treeByParentID',
  DETAIL = 'detail',
  DELETES = 'deleteByIds',
}

interface optionsType {
  getFormDetail: Function;
  getTableDetail: Function;
  crud: (dml: DML, tableName: string, data?: object, params?: object) => AxiosPromise;
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: any;
    axios: any;
    dayjs: any;
    $pinyinmatch: any;
    install: any;
    HOST_URL: any;
    API_URL: any;
    $PROCRUD: optionsType;
  }

  interface VueConstructor {
    install: any;
  }
}

declare global {
  interface Window {
    __HOST__URL__: string;
    __PREFIX__URL__: string;
    ace: any;
    VueTreeselect: any;
  }
}

export {};
