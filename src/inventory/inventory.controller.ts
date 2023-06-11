import { Body, Controller, Post } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

@Controller('inv')
export class InventoryController {
    constructor(private inventoryService: InventoryService) {}

    @Post('add')
    add(@Body() product: Product){
        return product;
    }
}