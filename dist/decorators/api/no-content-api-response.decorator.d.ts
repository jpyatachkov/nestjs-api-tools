export interface NoContentApiResponseOptions {
    description: string;
    type?: any;
}
export declare const NoContentApiResponse: (options: NoContentApiResponseOptions) => MethodDecorator & ClassDecorator;
